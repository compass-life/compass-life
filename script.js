// Auto-fill content from site-data.json so edits are centralized.
(async () => {
  const res = await fetch('site-data.json');
  const site = await res.json();

  // Features
  const featuresEl = document.getElementById('featuresList');
  if (featuresEl && Array.isArray(site.features)) {
    site.features.forEach(f => {
      const div = document.createElement('div');
      div.className = 'card';
      div.textContent = f;
      featuresEl.appendChild(div);
    });
  }

  // Services
  const servicesEl = document.getElementById('servicesList');
  if (servicesEl && Array.isArray(site.services)) {
    site.services.forEach(s => {
      const wrap = document.createElement('div');
      wrap.className = 'card';
      wrap.innerHTML = `<h3 style="margin:0 0 6px;font-size:18px;">${s.title}</h3><p style="margin:0;color:#374151;line-height:1.8;">${s.desc}</p>`;
      servicesEl.appendChild(wrap);
    });
  }

  // Day Flow
  const dayEl = document.getElementById('dayFlow');
  if (dayEl && Array.isArray(site.dayFlow)) {
    site.dayFlow.forEach(d => {
      const row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `<strong style="font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace">${d.time}</strong><span>${d.what}</span>`;
      dayEl.appendChild(row);
    });
  }

  // Email buttons (show only if email is provided)
  const email = (site.email || '').trim();
  if (email) {
    const btn = document.getElementById('emailBtn');
    const card = document.getElementById('emailCard');
    if (btn){ btn.style.display = 'inline-block'; btn.href = `mailto:${email}`; btn.textContent = '✉ メール'; }
    if (card){ card.style.display = 'block'; card.href = `mailto:${email}`; card.textContent = `メール：${email}`; }
  }

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();