import React from 'react';
import Logo from '../images/logo.svg'

const Header = () => {



  return (
    <div class="header" id="header">
		<div class="header__top">
			<div class="wrapper">
				<div class="header__logo">
					<a><img src={Logo} alt="LOGO"/></a>
				</div>
				<div class="header__info-block contacts">
					<span class="info_link_block">
						<a href="tel:+8495663-06-06" class="info_link">
						+8 495 663-06-06
						</a>
	
						<a href="mailto:iba-cis@gmail.com" class="info_link" >
						iba-cis@gmail.com
						</a>
					</span>
																<a href="/members" class="btn btn_blue">
							Члены Ассоциации
						</a>
									</div>

				 
				 
					<div class="header__info-block notAuthorized">
						<a href="/contacts" data-target="loginForm" class="btn btn_blue openModal">
							Вступить в АПСНГ
						</a>
						{/* <a href="#" data-target="loginForm" class="btn btn_blue btn_blue-bordered openModal">
							<i class="icon account"></i>
							Вход
						</a> */}
					</div>
				 


				<div class="header__info-block search">
					<div class="searchbar">
						<input type="search" placeholder="Поиск" onclick="$('#search_button').click();"/>
						<a class="btn btn_gray btn_icon fancybox" id="search_button" data-src="#search" data-modal="true" href="#search">
							<i class="icon search"></i>
						</a>
					</div>
				</div>


				<div class="navMobileButton">
					<div class="line"></div>
					<div class="line"></div>
					<div class="line"></div>
				</div>
			</div>
		</div>

		<div class="header__bottom">
			<div class="wrapper">
                		
<ul class="nav">
<li class="nav-item"><a href="/" class="root-item">Главная</a></li>	
					<li class="nav-item"><a href="/about" class="root-item">О нас</a></li>		
					{/* <li class="nav-item"><a href="/ru/media/" class="root-item">Медиацентр</a>
				<div class="nav-item-box">
							<div class="container">
								<dl class="sub-box">
		
	
	
			

																<dd class="hide_mobile"><a href="/ru/media/">Медиацентр</a></dd>
							

	
	
			

																<dd><a href="/ru/news/">Новости</a></dd>
							

	
	
			

																<dd><a href="/ru/aeb-publications/">Публикации</a></dd>
							

	
	
			

												</dl><dl class="sub-box">
													<dd><a href="/ru/media/press-releases/">Пресс-релизы</a></dd>
							

	
	
			

																<dd><a href="/ru/media/press-releases/sales-of-cars-and-light-commercial-vehicles.php">Статистика продаж легковых автомобилей</a></dd>
							

	
	
			

																<dd><a href="/ru/media/press-releases/sales-of-new-construction-equipment/">Статистика продаж ДСТ</a></dd>
							

	
	
			

												</dl><dl class="sub-box">
													<dd><a href="/ru/media/aeb_annual_survey/">Ежегодное бизнес-исследование АЕБ</a></dd>
							

	
	
			

																<dd><a href="/ru/media/aeb-about-parallel-imports/">АЕБ о параллельном импорте</a></dd>
							

	
	
			</dl></div></div></li>		 */}
					<li class="nav-item"><a href="/members" class="root-item">Члены Ассоциации</a></li>		
					<li class="nav-item"><a href="/charter" class="root-item">Устав</a></li>		
					<li class="nav-item"><a href="/ethical" class="root-item">Этический кодекс</a></li>		
					<li class="nav-item"><a href="/executive-committee" class="root-item">Комитеты</a>
				<div class="nav-item-box">
							<div class="container">
								<dl class="sub-box">
																<dd><a href="/executive-committee">Исполнительный комитет</a></dd>

																<dd><a href="/legal-committee">Юридический комитет</a></dd>

																<dd><a href="/quality_of_life_committee">Комитет по качеству жизни</a></dd>

																<dd><a href="/marketing_committee">Комитет по маркетингу и коммуникациям</a></dd>

																<dd><a href="/real_estate_committee">Комитет по недвижимости</a></dd>

																<dd><a href="/industrial_committee">Промышленный комитет</a></dd>

																<dd><a href="/resources_committee">Комитет по трудовым ресурсам</a></dd>

																<dd><a href="/finance_committee">Финансовый комитет</a></dd>

																<dd><a href="/innovation_committee">Комитет по инновациям</a></dd>
	
			</dl></div></div></li>		
					<li class="nav-item"><a href="/articles" class="root-item">Статьи</a></li></ul>	
					<li class="nav-item border-radius-blue"><a href="/contacts" class="root-item-selected">Контакты</a></li>


				<a href="/ru/for-aeb-members/our-members-new/" class="btn btn_blue membership_mobile">
						Membership Directory
				</a>
				<div className="lang">
            {/* При клике вызываем handleLanguageToggle */}
            <input
              type="checkbox"
              id="langChose"
            />
            <label htmlFor="langChose">
              <span className="eng">ENG</span>
              <span className="rus">RUS</span>
            </label>
          </div>
			</div>
		</div>
	</div>
  );
};

export default Header;
