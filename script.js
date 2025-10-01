// Data structure: days -> exercises (id, title, reps, description, img, videos[])
const DATA = {
    pondeli: {
        title: '1. den — nohy + břicho',
        description: 'Trénink: Všechny cviky do technického selhání!',
        exercises: [
            { id: 'druppy', title: 'Dřepy s jednoručkou', meta: '3×8–12', desc: 'Drž jednoručku u hrudi, hlava neutrální, kontrolovaný pohyb. Snaž se jít do hloubky, udržovat stabilní dýchání.', img: "images/day1/1.webp", videos: [{ title: 'Dřepy s jednoručkou - návod', url: 'https://www.youtube.com/results?search_query=d%C5%99epy+s+jednoru%C4%8Dkou' }] },
            { id: 'haken', title: 'Haken dřep na stroji', meta: '4×5–10', desc: 'Opřená záda, kolena míří nad 3. prst. Kontrolované sestupování a explozivní zdvih.', img: "images/day1/2.jpg", videos: [{ title: 'Hack squat', url: 'https://www.youtube.com/results?search_query=hack+squat' }] },
            { id: 'vypady', title: 'Výpady na místě', meta: '4×5–10 na nohu', desc: 'Koleno přední nohy nejde přes špičku. Drž trup vzpřímený.', img: "images/day1/3.webp", videos: [{ title: 'Výpady - technika', url: 'https://www.youtube.com/results?search_query=v%C3%BDpady+na+m%C3%ADst%C4%9B' }] },
            { id: 'hipthrust', title: 'Hip thrust na stroji', meta: '3×10–15', desc: 'Nepropouštět břicho, zatlačit hýždě do špičky. Kontrolujte pánev.', img: "images/day1/4.gif", videos: [{ title: 'Hip thrust', url: 'https://www.youtube.com/results?search_query=hip+thrust' }] },
            { id: 'predkopavani', title: 'Předkopávání na stroji', meta: '3×12', desc: 'Kontrolované zvedání nohou, soustředit se na kvadriceps.', img: "images/day1/5.gif", videos: [{ title: 'Předkopávání', url: 'https://www.youtube.com/results?search_query=p%C5%99edkop%C3%A1v%C3%A1n%C3%AD+na+stroji' }] },
            { id: 'zakopavani', title: 'Zakopávání na stroji', meta: '3×12', desc: 'Soustřeď se na hamstring, kontrolované vracení do startu.', img: "images/day1/6.webp", videos: [{ title: 'Zakopávání', url: 'https://www.youtube.com/results?search_query=zakop%C3%A1v%C3%A1n%C3%AD+na+stroji' }] },
            // Ab exercises
            { id: 'bricho1', title: 'Břicho – přitahování kolen', meta: '2×10', desc: 'V leže na zádech s výdechem přitahuj kolena k hrudníku. Kontroluj dýchání.', img: "images/day1/7.jpg", videos: [{ title: 'Břišní cvik - přitahování kolen', url: 'https://www.youtube.com/results?search_query=pritahovani+kolen+bricho' }] },
            { id: 'bricho2', title: 'Břicho – zvedání lopatek', meta: '2×10', desc: 'V leže zvedej lopatky směrem ke stropu s výdechem, nohy kolmo ke stropu.', img: "images/day1/8.jpg", videos: [{ title: 'Zvedání lopatek', url: 'https://www.youtube.com/results?search_query=zvedani+lopatek+bricho' }] }
        ]
    },
    streda: {
        title: '2. den — ramena, prsa, biceps + břicho',
        description: 'Trénink: Všechny cviky do technického selhání!',
        exercises: [
            { id: 'tlak_stroj', title: 'Tlak v sedě na stroji (ramena)', meta: '4×10', desc: 'Ramena tlač dolů, lopatky k sobě. Kontroluj rozsah.', img: "images/day2/", videos: [{ title: 'Shoulder press machine', url: 'https://www.youtube.com/results?search_query=shoulder+press+machine' }] },
            { id: 'rozpazovani', title: 'Rozpažování (ramena)', meta: '3×10–15', desc: 'Nesmí vyjíždět k uším; kontroluj negativní fázi.', img: "images/day2/", videos: [{ title: 'Lateral raises', url: 'https://www.youtube.com/results?search_query=lateral+raises' }] },
            { id: 'incline', title: 'Incline bench na multipressu', meta: '4×10', desc: 'Ramena tlačit dolů a lopatky k sobě. Kontroluj stabilitu.', img: "images/day2/", videos: [{ title: 'Incline bench', url: 'https://www.youtube.com/results?search_query=incline+bench+press' }] },
            { id: 'tlaky_jednorucky', title: 'Tlaky jednoručkami v leže', meta: '3×10', desc: 'Ramena tlačit dolů, lopatky k sobě.', img: "images/day2/", videos: [{ title: 'Dumbbell bench press', url: 'https://www.youtube.com/results?search_query=dumbbell+bench+press' }] },
            { id: 'rozpazovani_kladky', title: 'Rozp. na peck deck / kladky', meta: '3×10', desc: 'Soustředíme se na protažení svalu, negativní fáze pomalejší.', img: "images/day2/", videos: [{ title: 'Pec deck', url: 'https://www.youtube.com/results?search_query=pec+deck' }] },
            { id: 'biceps_kladka', title: 'Bicepsový zdvih podhmatem (kladka)', meta: '3×12', desc: 'Lopatky u sebe, ramena dolů, kontroluj pohyb.', img: "images/day2/", videos: [{ title: 'Cable biceps curl underhand', url: 'https://www.youtube.com/results?search_query=cable+biceps+curl+underhand' }] },
            { id: 'biceps_cinka', title: 'Bicepsový zdvih nadhmatem (činka)', meta: '3×12', desc: 'Kontrolované tempo, plný rozsah.', img: "images/day2/", videos: [{ title: 'Barbell reverse curl', url: 'https://www.youtube.com/results?search_query=reverse+barbell+curls' }] },
            { id: 'plank_knee', title: 'Plank - křížem přitahování kolena', meta: '4×15+15', desc: 'Pozice planku, ruce pod rameny. Křížem přitahuj koleno k loktu.', img: "images/day2/", videos: [{ title: 'Plank knee to elbow', url: 'https://www.youtube.com/results?search_query=plank+knee+to+elbow' }] }
        ]
    },
    patek: {
        title: '3. den — záda, triceps + břicho',
        description: 'Trénink: Všechny cviky do technického selhání!',
        exercises: [
            { id: 'trx', title: 'Přítahy na TRX', meta: '3×10–15', desc: 'Od uvolnění do stažení lopatek. Kontroluj dýchání.', img: "images/day3/", videos: [{ title: 'TRX rows', url: 'https://www.youtube.com/results?search_query=trx+rows' }] },
            { id: 'osy_predklon', title: 'Přítahy osy v předklonu', meta: '4×5–10', desc: 'Rovná záda, dýchání do břicha.', img: "images/day3/", videos: [{ title: 'Bent over barbell rows', url: 'https://www.youtube.com/results?search_query=bent+over+barbell+rows' }] },
            { id: 'stahovani_kladky', title: 'Stahování kladky nadhmatem', meta: '3×8–15', desc: 'Práce lopatek, kontrolovaný pohyb.', img: "images/day3/", videos: [{ title: 'Lat pulldown wide', url: 'https://www.youtube.com/results?search_query=lat+pulldown+wide' }] },
            { id: 'pritahovani_sed', title: 'Přitahování kladky v sedě (široko)', meta: '3×8–12', desc: 'Mírný předklon, rovná záda.', img: "images/day3/", videos: [{ title: 'Seated cable rows', url: 'https://www.youtube.com/results?search_query=seated+cable+rows' }] },
            { id: 'pritahovani_podhmat', title: 'Přitahování v sedě podhmatem (one arm)', meta: '3×10+10', desc: 'Po jedné ruce, soustřeď se na stah lopatky.', img: "images/day3/", videos: [{ title: 'One arm seated row', url: 'https://www.youtube.com/results?search_query=one+arm+row+machine' }] },
            { id: 'francouzsky', title: 'Francouzský tlak v leže', meta: '4×8–12', desc: 'Kontrolované natahování tricepsu a plné protažení.', img: "images/day3/", videos: [{ title: 'Lying triceps extension', url: 'https://www.youtube.com/results?search_query=lying+triceps+extension' }] },
            { id: 'triceps_kladka', title: 'Tricepsové stahování kladky (podhmat)', meta: '3×10–12', desc: 'Lopatky k sobě, ramena dolů.', img: "images/day3/", videos: [{ title: 'Reverse grip triceps pushdown', url: 'https://www.youtube.com/results?search_query=reverse+grip+triceps+pushdown' }] },
            { id: 'kickback', title: 'Kick back (zapažování)', meta: '3×10–12', desc: 'Kontrolované vedení, drž loket stabilní.', img: "images/day3/", videos: [{ title: 'Triceps kickback', url: 'https://www.youtube.com/results?search_query=triceps+kickback' }] },
            { id: 'plank_forearm', title: 'Plank na předloktí', meta: '2×30+s', desc: 'Drž tělo v přímce, pevné jádro.', img: "images/day3/", videos: [{ title: 'Forearm plank', url: 'https://www.youtube.com/results?search_query=forearm+plank' }] },
            { id: 'side_plank', title: 'Side plank', meta: '2×30+30s', desc: 'Bokem nahoru, drž pánev zvednutou.', img: "images/day3/", videos: [{ title: 'Side plank', url: 'https://www.youtube.com/results?search_query=side+plank' }] }
        ]
    }
};

// Utility DOM
const dayButtons = document.querySelectorAll('.days .btn');
const exercisesList = document.getElementById('exercises-list');
const detail = document.getElementById('exercise-detail');
const dayTitle = document.getElementById('day-title');

let currentDay = null;
let currentExerciseId = null;

function formatExerciseItem(ex)
{
    const div = document.createElement('div');
    div.className = 'exercise-item';
    div.dataset.id = ex.id;
    div.innerHTML = `<div class="exercise-title">${ex.title}</div><div class="meta">${ex.meta || ''}</div>`;
    div.addEventListener('click', () => selectExercise(ex.id));
    return div;
}

function renderDay(dayKey)
{
    currentDay = dayKey;
    dayTitle.textContent = DATA[dayKey].title;
    exercisesList.innerHTML = '';
    DATA[dayKey].exercises.forEach(ex =>
    {
        exercisesList.appendChild(formatExerciseItem(ex));
    });
    // mark active button
    dayButtons.forEach(b => b.classList.toggle('active', b.dataset.day === dayKey));
    // reset detail
    detail.innerHTML = '<div class="placeholder"><h3>Vyber cvik</h3><p class="meta">Po kliknutí na cvik se zobrazí popis, obrázek, odkazy na video a pole pro poznámky.</p></div>';
    currentExerciseId = null;
}

function selectExercise(exId)
{
    currentExerciseId = exId;
    // highlight selected in list
    document.querySelectorAll('.exercise-item').forEach(el => el.classList.toggle('active', el.dataset.id === exId));
    const ex = DATA[currentDay].exercises.find(e => e.id === exId);
    const imgHtml = ex.img ? `<img src="${ex.img}" alt="${ex.title}">` : defaultImageSvg();
    const videosHtml = (ex.videos || []).map(v => `<a class="video-link" target="_blank" rel="noopener" href="${v.url}">${v.title}</a>`).join('');

    detail.innerHTML = `
      <div>
        <h2>${ex.title}</h2>
        <div class="meta">${DATA[currentDay].description} · ${ex.meta || ''}</div>
      </div>
      <div class="media">
        ${imgHtml}
        <div class="desc">
          <p>${escapeHtml(ex.desc)}</p>
          <div class="videos">${videosHtml}</div>
        </div>
      </div>
      <div>
        <label for="comment">Poznámka k tomuto cviku</label>
        <textarea id="comment" placeholder="Napiš sem svou poznámku..."></textarea>
        <div class="row" style="margin-top:8px">
          <button id="saveComment" class="save-btn">Uložit poznámku</button>
          <button id="clearComment" class="btn">Smazat poznámku</button>
          <div style="margin-left:auto;color:var(--muted);font-size:13px;padding-top:6px">Uloženo v prohlížeči</div>
        </div>
      </div>
    `;

    const textarea = document.getElementById('comment');
    const saveBtn = document.getElementById('saveComment');
    const clearBtn = document.getElementById('clearComment');

    // load saved comment
    const key = storageKey(currentDay, currentExerciseId);
    const saved = localStorage.getItem(key);
    if (saved) textarea.value = saved;

    saveBtn.addEventListener('click', () =>
    {
        localStorage.setItem(key, textarea.value);
        saveBtn.textContent = 'Uloženo ✓';
        setTimeout(() => saveBtn.textContent = 'Uložit poznámku', 900);
    });
    clearBtn.addEventListener('click', () =>
    {
        localStorage.removeItem(key);
        textarea.value = '';
    });
}

function storageKey(day, exId)
{
    return `gym_comment__${day}__${exId}`;
}

function escapeHtml(text)
{
    if (!text) return '';
    return text.replace(/[&<>\"]/g, function (t) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[t] });
}

function defaultImageSvg()
{
    // small inline SVG placeholder
    return `<div style="width:210px;height:140px;border-radius:8px;background:linear-gradient(180deg,rgba(255,255,255,0.01),transparent);display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.03);">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13h2v7H3zM19 13h2v7h-2zM7 21h2V14H7zM15 21h2V14h-2z" fill="currentColor" opacity="0.3"/>
        <path d="M12 3c1.1 0 2 .9 2 2v5h-4V5c0-1.1.9-2 2-2z" fill="currentColor"/>
      </svg>
    </div>`;
}

// attach day buttons
dayButtons.forEach(b => b.addEventListener('click', () => renderDay(b.dataset.day)));

// initial: select first day
renderDay('pondeli');

// keyboard shortcut: numbers 1-3 to switch days
window.addEventListener('keydown', (e) =>
{
    if (e.key === '1') renderDay('pondeli');
    if (e.key === '2') renderDay('streda');
    if (e.key === '3') renderDay('patek');
});