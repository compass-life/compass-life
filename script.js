(async () => {
  const res = await fetch('site-data.json');
  const site = await res.json();

  const featuresEl = document.getElementById('featuresList');
  if (featuresEl && Array.isArray(site.features)) {
    site.features.forEach(f => {
      const div = document.createElement('div');
      div.className = 'card';
      div.textContent = f;
      featuresEl.appendChild(div);
    });
  }

  const servicesEl = document.getElementById('servicesList');
  if (servicesEl && Array.isArray(site.services)) {
    site.services.forEach(s => {
      const wrap = document.createElement('div');
      wrap.className = 'card';
      wrap.innerHTML = `<h3 style="margin:0 0 6px;font-size:18px;font-family:'M PLUS Rounded 1c',sans-serif">${s.title}</h3><p style="margin:0;color:#374151;line-height:1.9;">${s.desc}</p>`;
      servicesEl.appendChild(wrap);
    });
  }

  const dayEl = document.getElementById('dayFlow');
  if (dayEl && Array.isArray(site.dayFlow)) {
    site.dayFlow.forEach(d => {
      const row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `<strong>${d.time}</strong><span>${d.what}</span>`;
      dayEl.appendChild(row);
    });
  }

  const cap = document.getElementById('capacitySlot');
  const acc = document.getElementById('acceptanceSlot');
  if (cap && site.capacity) cap.textContent = site.capacity;
  if (acc && site.acceptance) acc.textContent = site.acceptance;

  const cost = document.getElementById('costSlot');
  const visit = document.getElementById('visitSlot');
  if (cost && site.guide && site.guide.cost) cost.textContent = site.guide.cost;
  if (visit && site.guide && site.guide.visit) visit.textContent = site.guide.visit;

  const email = (site.email || '').trim();
  if (email) {
    const btn = document.getElementById('emailBtn');
    const card = document.getElementById('emailCard');
    if (btn){ btn.style.display = 'inline-block'; btn.href = `mailto:${email}`; btn.textContent = '✉ メール'; }
    if (card){ card.style.display = 'inline-block'; card.href = `mailto:${email}`; card.textContent = `メール：${email}`; }
  }

  const slides = document.querySelectorAll('#voiceSlider .slide');
  if (slides.length) {
    let idx = 0;
    setInterval(() => {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 4000);
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();