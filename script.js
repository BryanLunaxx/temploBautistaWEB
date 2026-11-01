/* Templo Bautista Atenas · script.js (JavaScript vanilla) */
(() => {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  const header = document.querySelector('.header');

  // Menú hamburguesa: abre/cierra y actualiza aria-expanded
  const setMenu = (open) => {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Desplazamiento suave con compensación de la navbar fija
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      setMenu(false); // cierra el menú móvil tras navegar
    });
  });

  // Año automático en el footer
  document.getElementById('year').textContent = new Date().getFullYear();

// Abrir y cerrar modales de servicios
document.querySelectorAll('.btn-more').forEach((btn) => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.showModal();
  });
});

document.querySelectorAll('.modal__close').forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('dialog').close();
  });
});

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
});

//Diccionario en ingles, modo oscuro y lenguaje en ingles
const translations = {
  es: {
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_about: "Sobre nosotros",
    nav_contact: "Contáctenos",
    hero_eyebrow: "25 años · 2001 – 2026",
    hero_title: 'Proclamando la <span class="accent-text">gracia de Dios</span> en Atenas',
    hero_lead: "Somos una iglesia llevando el mundo al conocimiento de Dios. Lo invitamos a ser parte de nuestra familia en la fe.",
    btn_services: "Conozca nuestros servicios",
    btn_history: "Nuestra historia",
    meetings_eyebrow: "Reuniones",
    meetings_title: "Un lugar para crecer juntos",
    meetings_subtitle: "Puedes observar los Horarios de los distintos servicios.",
    card1_title: "Culto dominical",
    card1_desc: "Adoración, oración y enseñanza de la Palabra de Dios para toda la familia.",
    card2_title: "Estudio bíblico",
    card2_desc: "Un espacio para profundizar en las Escrituras y crecer en el conocimiento de Dios.",
    card3_title: "Comunión y ministerios",
    card3_desc: "Grupos, actividades y servicio comunitario para niños, jóvenes y adultos.",
    btn_more: "Ver más detalles",
    modal_schedules: "Horarios:",
    modal_schedule: "Horario:",
    modal_location: "Lugar:",
    modal_temple: "Templo",
    modal1_time: "Domingos 9:00 AM a 11:00 AM",
    modal1_details: "Un tiempo especial para alabar a Dios juntos y aprender de su Palabra. Contamos con escuelita para los niños y escuela dominical durante el servicio.",
    modal2_time: "Jueves 7:00 PM",
    modal2_details: "Profundizamos en las Escrituras verso a verso y nos unimos en un tiempo de oración por las necesidades de nuestra iglesia y comunidad.",
    modal3_youth: "Jóvenes:",
    modal3_youth_time: "Sábados 4:00 PM",
    modal3_youth_place: "Lugar Reunión Jóvenes:",
    modal3_groups: "Damas / Varones y Matrimonios:",
    modal3_groups_desc: "Reuniones mensuales según calendario.",
    modal3_details: "Espacios diseñados para construir amistades sólidas, servir a la comunidad y crecer juntos en el ámbito espiritual.",
    about_eyebrow: "Sobre nosotros",
    about_title: "25 años de fidelidad",
    about_desc: "Desde 2001, el Templo Bautista Atenas ha sido un hogar para quienes buscan conocer a Dios. Hemos visto su obra en cada etapa: desde nuestra primera capilla hasta el templo actual.",
    about_quote: "“La fidelidad de Dios nos ha perseguido por 25 años y seguirá persiguiéndonos.”",
    footer_address: "Atenas, Alajuela, Costa Rica",
    footer_quick_menu: "Menú rápido",
    footer_follow: "Síganos",
    footer_rights: "Todos los derechos reservados.",
    
    //misiones
    missions_eyebrow: "Obra Misionera",
    missions_title: "Misiones y Alcance Global",
    missions_desc: "Apoyamos activamente la proclamación del Evangelio tanto internacionalmente como en nuestra nación a través de la oración y el soporte financiero:",
    mission_1: "- Indonesia: Cristopher y Beatriz",
    mission_2: "- Guatemala: Ángel Pedro",
    mission_3: "- Misiones Locales: Upala, Sarapiquí, Centro Prenatal y Hogar de Vida para la Niñez.",
    missions_quote: '"Oremos juntos por el avance del Reino de Dios."'



  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About us",
    nav_contact: "Contact us",
    hero_eyebrow: "25 years · 2001 – 2026",
    hero_title: 'Proclaiming the <span class="accent-text">grace of God</span> in Atenas',
    hero_lead: "We are a church bringing the world to the knowledge of God. We invite you to be part of our family in faith.",
    btn_services: "Discover our services",
    btn_history: "Our history",
    meetings_eyebrow: "Meetings",
    meetings_title: "A place to grow together",
    meetings_subtitle: "You can view the schedules for our various services.",
    card1_title: "Sunday Service",
    card1_desc: "Worship, prayer, and teaching of God's Word for the whole family.",
    card2_title: "Bible Study",
    card2_desc: "A space to delve into the Scriptures and grow in the knowledge of God.",
    card3_title: "Fellowship & Ministries",
    card3_desc: "Groups, activities, and community service for children, youth, and adults.",
    btn_more: "See details",
    modal_schedules: "Schedules:",
    modal_schedule: "Schedule:",
    modal_location: "Location:",
    modal_temple: "Main Sanctuary",
    modal1_time: "Sundays 9:00 AM to 11:00 AM",
    modal1_details: "A special time to praise God together and learn from His Word. We have Sunday school for children during the service.",
    modal2_time: "Thursdays 7:00 PM",
    modal2_details: "We delve into the Scriptures verse by verse and join in prayer for the needs of our church and community.",
    modal3_youth: "Youth Ministry:",
    modal3_youth_time: "Saturdays 4:00 PM",
    modal3_youth_place: "Youth Meeting Location:",
    modal3_groups: "Women / Men & Couples:",
    modal3_groups_desc: "Monthly meetings according to calendar.",
    modal3_details: "Spaces designed to build strong friendships, serve the community, and grow together spiritually.",
    about_eyebrow: "About us",
    about_title: "25 years of faithfulness",
    about_desc: "Since 2001, Templo Bautista Atenas has been a home for those seeking to know God. We have seen His work at every stage: from our first chapel to the current sanctuary.",
    about_quote: "“God's faithfulness has pursued us for 25 years and will continue to pursue us.”",
    footer_address: "Atenas, Alajuela, Costa Rica",
    footer_quick_menu: "Quick menu",
    footer_follow: "Follow us",
    footer_rights: "All rights reserved.",

    // Missions
    missions_eyebrow: "Missionary Work",
    missions_title: "Missions & Global Outreach",
    missions_desc: "We actively support the proclamation of the Gospel both internationally and locally through prayer and financial support:",
    mission_1: "- Indonesia: Cristopher and Beatriz",
    mission_2: "- Guatemala: Ángel Pedro",
    mission_3: "- Local Missions: Upala, Sarapiquí, Prenatal Center, and Children's Home of Life.",
    missions_quote: '"Let us pray together for the advancement of God\'s Kingdom."'

  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. MODO OSCURO
  const btnTheme = document.getElementById('btn-theme');
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (btnTheme) btnTheme.textContent = '☀️';
  }

  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      btnTheme.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // 2. TRADUCCIÓN GLOBAL ES / EN
  const btnLang = document.getElementById('btn-lang');
  let currentLang = localStorage.getItem('lang') || 'es';

  function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (key === 'hero_title') {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    if (btnLang) {
      btnLang.textContent = lang === 'es' ? 'EN' : 'ES';
    }
    localStorage.setItem('lang', lang);
  }

  applyLanguage(currentLang);

  if (btnLang) {
    btnLang.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(currentLang);
    });
  }
});



})();
