import React from 'react';
import { Helmet } from 'react-helmet-async';
import profile from './artemIvanov.json';
import portrait from '../images/02534.jpg';
import './MemberProfile.css';

const origin = 'https://alliancecisentrepreneurs.com';
const url = origin + profile.path;
const title = 'Artem Ivanov (Артем Иванов) — Альянс предпринимателей СНГ';
const organization = {
  '@type': 'Organization',
  '@id': origin + '/#organization',
  name: 'Международная Бизнес Ассоциация «Альянс предпринимателей СНГ»',
  url: origin + '/',
};

export default function MemberProfile() {
  const imageUrl = new URL(portrait, origin).href;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'ProfilePage', '@id': url + '#profile', url,
        name: title, description: profile.description, inLanguage: 'ru',
        mainEntity: { '@id': url + '#person' },
        publisher: { '@id': organization['@id'] },
        breadcrumb: { '@id': url + '#breadcrumbs' },
      },
      {
        '@type': 'Person', '@id': url + '#person',
        name: 'Артем Иванов', alternateName: 'Artem Ivanov',
        url, image: imageUrl, description: profile.intro[0],
        nationality: { '@type': 'Country', name: 'Украина' },
        knowsAbout: [profile.facts[1][1], profile.facts[2][1]],
        memberOf: {
          '@type': 'OrganizationRole', startDate: '2026-05-11',
          memberOf: { '@id': organization['@id'] },
        },
      },
      {
        '@type': 'BreadcrumbList', '@id': url + '#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: origin + '/' },
          { '@type': 'ListItem', position: 2, name: 'Члены Ассоциации', item: origin + '/members' },
          { '@type': 'ListItem', position: 3, name: 'Артем Иванов', item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={profile.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={profile.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Артем Иванов (Artem Ivanov)" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>
      </Helmet>
      <main className="member-profile wrapper">
        <nav className="member-profile__breadcrumbs" aria-label="Хлебные крошки">
          <a href="/">Главная</a><span aria-hidden="true">/</span>
          <a href="/members">Члены Ассоциации</a><span aria-hidden="true">/</span>
          <span aria-current="page">Артем Иванов</span>
        </nav>
        <header className="member-profile__hero">
          <img className="member-profile__portrait" src={portrait} width="1280" height="1067" alt="Артем Иванов (Artem Ivanov)" fetchpriority="high" />
          <div className="member-profile__identity">
            <p className="member-profile__eyebrow">ПРОФИЛЬ ЧЛЕНА АССОЦИАЦИИ</p>
            <h1>{profile.name}</h1>
            <dl className="member-profile__facts">
              {profile.facts.map(([label, value]) => (
                <div key={label}><dt>{label}:</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </div>
        </header>
        <div className="member-profile__layout">
          <nav className="member-profile__navigation" aria-label="Разделы профиля">
            {profile.sections.map(section => <a key={section.id} href={'#' + section.id}>{section.title}</a>)}
            <a className="member-profile__back" href="/members">← Члены Ассоциации</a>
          </nav>
          <div className="member-profile__details">
            <div className="member-profile__intro">{profile.intro.map(text => <p key={text}>{text}</p>)}</div>
            {profile.sections.map(section => (
              <section key={section.id} id={section.id} aria-labelledby={section.id + '-title'}>
                <h2 id={section.id + '-title'}>{section.title}</h2>
                {section.paragraphs.map(text => <p key={text}>{text}</p>)}
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
