import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import articlesData from './articlesData';
import Breadcrumb from "./Breadcrumb";

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function isGoogleTranslated() {
      const html = document.documentElement;
      const body = document.body;

      return (
        html.classList.contains('translated-ltr') ||
        html.classList.contains('translated-rtl') ||
        body.classList.contains('translated-ltr') ||
        body.classList.contains('translated-rtl') ||
        document.cookie.indexOf('googtrans=') !== -1 ||
        html.getAttribute('lang') !== 'ru'
      );
    }

    function fixValue(text) {
      if (!text) return text;

      return text
        .replace(/\bVadim Prenko's\b/g, "Vadym Prenko's")
        .replace(/\bVADIM PRENKO'S\b/g, "VADYM PRENKO'S")
        .replace(/\bVadim Prenkos\b/g, "Vadym Prenko's")
        .replace(/\bVADIM PRENKOS\b/g, "VADYM PRENKO'S")
        .replace(/\bVadim Prynko's\b/g, "Vadym Prenko's")
        .replace(/\bVADIM PRYNKO'S\b/g, "VADYM PRENKO'S")
        .replace(/\bVadim Prynko\b/g, 'Vadym Prenko')
        .replace(/\bVADIM PRYNKO\b/g, 'VADYM PRENKO')
        .replace(/\bVadim Prenko\b/g, 'Vadym Prenko')
        .replace(/\bVADIM PRENKO\b/g, 'VADYM PRENKO')
        .replace(/\bVadim's\b/g, "Vadym's")
        .replace(/\bVADIM'S\b/g, "VADYM'S")
        .replace(/\bVadim\b/g, 'Vadym')
        .replace(/\bVADIM\b/g, 'VADYM')
        .replace(/\bNataliia Chernousova's\b/g, "Nataliia Chernousova's")
        .replace(/\bNATALIIA CHERNOUSOVA'S\b/g, "NATALIIA CHERNOUSOVA'S")
        .replace(/\bNatalia Chernousova\b/g, 'Nataliia Chernousova')
        .replace(/\bNATALIA CHERNOUSOVA\b/g, 'NATALIIA CHERNOUSOVA')
        .replace(/\bNatalya Chernousova\b/g, 'Nataliia Chernousova')
        .replace(/\bNATALYA CHERNOUSOVA\b/g, 'NATALIIA CHERNOUSOVA')
        .replace(/\bNataliya Chernousova\b/g, 'Nataliia Chernousova')
        .replace(/\bNATALIYA CHERNOUSOVA\b/g, 'NATALIIA CHERNOUSOVA')
        .replace(/\bNatalia\b/g, 'Nataliia')
        .replace(/\bNATALIA\b/g, 'NATALIIA')
        .replace(/\bNatalya\b/g, 'Nataliia')
        .replace(/\bNATALYA\b/g, 'NATALIIA');
    }

    function shouldSkipNode(parent) {
      if (!parent || !parent.tagName) return true;

      const tag = parent.tagName.toUpperCase();

      return (
        tag === 'SCRIPT' ||
        tag === 'STYLE' ||
        tag === 'NOSCRIPT' ||
        tag === 'TEXTAREA' ||
        tag === 'CODE' ||
        tag === 'PRE'
      );
    }

    function fixTextNodes(root) {
      if (!root) return;

      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            if (!node || !node.nodeValue || !node.nodeValue.trim()) {
              return NodeFilter.FILTER_REJECT;
            }

            if (shouldSkipNode(node.parentNode)) {
              return NodeFilter.FILTER_REJECT;
            }

            if (
              node.nodeValue.indexOf('Vadim') === -1 &&
              node.nodeValue.indexOf('VADIM') === -1 &&
              node.nodeValue.indexOf('Natal') === -1 &&
              node.nodeValue.indexOf('NATAL') === -1
            ) {
              return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      const nodes = [];
      let current;

      while ((current = walker.nextNode())) {
        nodes.push(current);
      }

      nodes.forEach((node) => {
        const fixed = fixValue(node.nodeValue);
        if (fixed !== node.nodeValue) {
          node.nodeValue = fixed;
        }
      });
    }

    function fixAttributes() {
      const selectors = [
        'title',
        'meta[name="description"]',
        'meta[name="keywords"]',
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[name="twitter:title"]',
        'meta[name="twitter:description"]',
        'img[alt]',
      ];

      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          if (el.tagName.toLowerCase() === 'title') {
            const fixedText = fixValue(el.textContent);
            if (fixedText !== el.textContent) {
              el.textContent = fixedText;
            }
          } else if (el.tagName.toLowerCase() === 'img') {
            const alt = el.getAttribute('alt');
            const fixedAlt = fixValue(alt);
            if (fixedAlt !== alt) {
              el.setAttribute('alt', fixedAlt);
            }
          } else {
            const content = el.getAttribute('content');
            const fixedContent = fixValue(content);
            if (fixedContent !== content) {
              el.setAttribute('content', fixedContent);
            }
          }
        });
      });

      if (document.title) {
        const fixedTitle = fixValue(document.title);
        if (fixedTitle !== document.title) {
          document.title = fixedTitle;
        }
      }
    }

    function runFixes() {
      if (!isGoogleTranslated()) return;
      fixTextNodes(document.body);
      fixAttributes();
    }

    let started = false;
    let mainObserver = null;
    let pollInterval = null;
    let translationWatcher = null;
    let translateCheckInterval = null;

    function startAfterTranslate() {
      if (started) return;
      started = true;

      runFixes();

      mainObserver = new MutationObserver(() => {
        runFixes();
      });

      if (document.body) {
        mainObserver.observe(document.body, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      }

      let count = 0;
      pollInterval = setInterval(() => {
        runFixes();
        count += 1;

        if (count > 180) {
          clearInterval(pollInterval);
        }
      }, 1000);
    }

    function waitForTranslate() {
      if (isGoogleTranslated()) {
        startAfterTranslate();
        return;
      }

      translationWatcher = new MutationObserver(() => {
        if (isGoogleTranslated()) {
          startAfterTranslate();
        }
      });

      translationWatcher.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['class', 'lang'],
      });

      translateCheckInterval = setInterval(() => {
        if (isGoogleTranslated()) {
          startAfterTranslate();
          clearInterval(translateCheckInterval);
        }
      }, 1000);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', waitForTranslate);
    } else {
      waitForTranslate();
    }

    return () => {
      if (mainObserver) mainObserver.disconnect();
      if (translationWatcher) translationWatcher.disconnect();
      if (pollInterval) clearInterval(pollInterval);
      if (translateCheckInterval) clearInterval(translateCheckInterval);
    };
  }, []);

  const { id } = useParams();
  const article = articlesData.find((item) => item.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found</div>;
  }

  const siteUrl = `https://alliancecisentrepreneurs.com/articles/${article.id}`;

  const seoTitle = article.seoTitle || article.title;
  const seoDescription = article.seoDescription || article.text;
  const seoKeywords = article.seoKeywords || `${article.title}, ${article.autor}`;
  const canonical = article.canonical || siteUrl;

  const ogTitle = article.ogTitle || seoTitle;
  const ogDescription = article.ogDescription || seoDescription;
  const ogImage = article.ogImage || article.cover || article.authorImage || article.image;

  const twitterTitle = article.twitterTitle || seoTitle;
  const twitterDescription = article.twitterDescription || seoDescription;
  const twitterImage = article.twitterImage || ogImage;

  const structuredData = article.structuredData || {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.text,
    author: {
      '@type': 'Person',
      name: article.autor,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    ...(article.image ? { image: [article.image] } : {}),
  };

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <p key={index} className="news__detail-text mb-20">
              {block.text}
            </p>
          );

        case 'header':
          return (
            <h5 key={index} className="section__subtitle marg-40">
              {block.text}
            </h5>
          );

        case 'sub-header':
          return (
            <div key={index} className="sub-header-text">
              {block.text}
            </div>
          );

        case 'image':
          return (
            <img
              key={index}
              src={block.src}
              alt={block.alt || article.title}
              className="article-page-image"
            />
          );

        case 'list':
          return (
            <ul className="page-about__list-item" key={index}>
              <li>{block.text}</li>
            </ul>
          );

        default:
          return null;
      }
    });
  };

  return (
    <>
      <Helmet>
        <html lang="ru" />
        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />

        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow,max-image-preview:large" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonical} />
        {ogImage && <meta property="og:image" content={ogImage} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        {twitterImage && <meta name="twitter:image" content={twitterImage} />}

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Breadcrumb currentPage="Статьи" />

      <div className="wrapper">
        <div className="article-page">
          <h1 className="news__detail-title-text">{article.title}</h1>
          <span className="news__item-date news__detail-date">{article.date}</span>

          <hr className="news__item_hr" />

          {article.layout === 'author-left' ? (
            <div className="article-author-hero">
              <div className="article-author-hero__image-wrap">
                <img
                  src={article.authorImage}
                  alt={article.autor}
                  className="article-author-hero__image"
                />
              </div>

              <div className="article-author-hero__content">
                {article.authorInfoTitle && (
                  <div className="article-author-hero__label">
                    {article.authorInfoTitle}
                  </div>
                )}

                <h2 className="article-author-hero__name">{article.autor}</h2>

                {article.authorInfoText && (
                  <p className="article-author-hero__text">
                    {article.authorInfoText}
                  </p>
                )}
              </div>
            </div>
          ) : article.cover ? (
            <img
              src={article.cover}
              alt={article.title}
              className="article-page-image"
            />
          ) : article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="article-page-image"
            />
          ) : null}

          <div className="article-page-content">
            {renderContent(article.content)}
          </div>

          <div className="news__detail-author">
            Автор: <span>{article.autor}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;