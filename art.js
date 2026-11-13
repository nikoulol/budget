// Clay-toy category illustrations. Flat two-tone shading, no outlines, 64x64.
const SH = '<ellipse cx="32" cy="57.5" rx="21" ry="3.5" fill="#24306E" opacity=".08"/>';
const svg = (inner) => `<svg viewBox="0 0 64 64" aria-hidden="true">${SH}${inner}</svg>`;

const ART = {
  family: svg(`
    <rect x="41" y="13" width="7" height="13" rx="2.5" fill="#E0503F"/>
    <path d="M14 30h36v19a5 5 0 0 1-5 5H19a5 5 0 0 1-5-5z" fill="#FFE59E"/>
    <path d="M39 30h11v19a5 5 0 0 1-5 5h-6z" fill="#FFD66B"/>
    <path d="M9 30 L32 11 L55 30 Z" fill="#FF6B5B" stroke="#FF6B5B" stroke-width="5" stroke-linejoin="round"/>
    <path d="M32 11 L55 30 L32 30 Z" fill="#E0503F" stroke="#E0503F" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="22" cy="24" rx="2" ry="4" transform="rotate(50 22 24)" fill="#fff" opacity=".6"/>
    <path d="M27 54v-8a5 5 0 0 1 10 0v8z" fill="#5A9EDB"/>
    <rect x="41" y="37" width="6" height="6" rx="1.8" fill="#8EC3F0"/>
    <path d="M21 46c-4.6-3.2-5.6-5.4-5.6-7.1a2.8 2.8 0 0 1 5.6-.9a2.8 2.8 0 0 1 5.6.9c0 1.7-1 3.9-5.6 7.1z" fill="#FF6B5B"/>
  `),
  savings: svg(`
    <circle cx="32" cy="11" r="6.5" fill="#FFD66B"/>
    <circle cx="31" cy="10" r="4.4" fill="#FFE59E"/>
    <rect x="18" y="44" width="7" height="11" rx="3.5" fill="#F2839A"/>
    <rect x="37" y="44" width="7" height="11" rx="3.5" fill="#F2839A"/>
    <path d="M13 36q-6-1-4-7" stroke="#F2839A" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="31" cy="37" rx="19" ry="14" fill="#F2839A"/>
    <ellipse cx="29.5" cy="35" rx="17" ry="12" fill="#FFA6B8"/>
    <path d="M21 26 l3-9 l8 7z" fill="#F2839A" stroke="#F2839A" stroke-width="2" stroke-linejoin="round"/>
    <ellipse cx="50" cy="37" rx="5" ry="6" fill="#FFC2CE"/>
    <ellipse cx="48.6" cy="36" rx="1" ry="1.6" fill="#C9536C"/>
    <ellipse cx="51.6" cy="36" rx="1" ry="1.6" fill="#C9536C"/>
    <circle cx="41" cy="31" r="2" fill="#24306E"/>
    <rect x="25" y="24.5" width="11" height="3" rx="1.5" fill="#C9536C"/>
    <ellipse cx="21" cy="33" rx="4.5" ry="2.6" transform="rotate(-25 21 33)" fill="#fff" opacity=".6"/>
  `),
  transport: svg(`
    <rect x="6" y="18" width="46" height="8" rx="4" fill="#E0503F"/>
    <rect x="6" y="18" width="46" height="4.5" rx="2.25" fill="#FF6B5B"/>
    <rect x="46" y="31" width="14" height="15" rx="4.5" fill="#5A9EDB"/>
    <path d="M8 25h40v19a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z" fill="#8EC3F0"/>
    <path d="M8 38h40v6a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z" fill="#5A9EDB"/>
    <rect x="8" y="36" width="52" height="2.5" fill="#FFD66B"/>
    <rect x="12" y="28" width="8" height="6.5" rx="2" fill="#E8F4FF"/>
    <rect x="23" y="28" width="8" height="6.5" rx="2" fill="#E8F4FF"/>
    <rect x="34" y="28" width="8" height="6.5" rx="2" fill="#E8F4FF"/>
    <path d="M51 26l4-5" stroke="#C0C7D6" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="57" cy="41.5" r="2.2" fill="#FFE59E"/>
    <circle cx="18" cy="49" r="6.2" fill="#24306E"/>
    <circle cx="18" cy="49" r="2.4" fill="#FFE59E"/>
    <circle cx="47" cy="49" r="6.2" fill="#24306E"/>
    <circle cx="47" cy="49" r="2.4" fill="#FFE59E"/>
    <ellipse cx="14" cy="20.2" rx="4" ry="1.3" fill="#fff" opacity=".6"/>
  `),
  food: svg(`
    <path d="M14 34a18 15 0 0 1 36 0z" fill="#F7F1E1"/>
    <path d="M34 19.5a18 15 0 0 1 16 14.5H38c1-6 0-10-4-14.5z" fill="#EAE1C9"/>
    <ellipse cx="28" cy="25" rx="10" ry="6.5" fill="#fff"/>
    <circle cx="29" cy="25" r="3.8" fill="#FFB23E"/>
    <circle cx="27.8" cy="23.8" r="1.1" fill="#FFE59E"/>
    <rect x="23" y="48" width="18" height="6" rx="2.5" fill="#E0503F"/>
    <path d="M9 33h46c0 12-10 19.5-23 19.5S9 45 9 33z" fill="#FF6B5B"/>
    <path d="M40 33h15c0 12-10 19.5-23 19.5c8-3.5 8.5-10 8-19.5z" fill="#E0503F"/>
    <rect x="11.5" y="39" width="41" height="3.2" rx="1.6" fill="#FFD66B"/>
    <ellipse cx="17" cy="36" rx="1.6" ry="3" fill="#fff" opacity=".55"/>
  `),
  coffee: svg(`
    <ellipse cx="31" cy="51" rx="19" ry="5" fill="#FFD66B"/>
    <ellipse cx="31" cy="49.6" rx="19" ry="3.8" fill="#FFE59E"/>
    <path d="M44 27a6.5 6.5 0 0 1 0 13" fill="none" stroke="#E0503F" stroke-width="5" stroke-linecap="round"/>
    <path d="M16 24h30v13a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12z" fill="#FF6B5B"/>
    <path d="M36 24h10v13a12 12 0 0 1-12 12h-2c7-3 5-9 4-25z" fill="#E0503F"/>
    <ellipse cx="31" cy="24" rx="15" ry="4.2" fill="#7A3E2E"/>
    <ellipse cx="22" cy="32" rx="2.4" ry="5" fill="#FFB3A8"/>
    <path d="M26 17c-3-3 3-5 0-9M33 17c-3-3 3-5 0-9" stroke="#C9A58B" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <circle cx="40" cy="12" r="2" fill="#fff"/>
  `),
  dates: svg(`
    <path d="M44 6 L57 30" stroke="#C08A5B" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 5 L58 28" stroke="#A8734A" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="32" cy="48" rx="25" ry="8" fill="#5A9EDB"/>
    <ellipse cx="32" cy="46" rx="25" ry="7" fill="#8EC3F0"/>
    <rect x="10" y="35" width="20" height="10" rx="5" fill="#fff"/>
    <rect x="10" y="40" width="20" height="5" rx="2.5" fill="#EEE8D8"/>
    <rect x="9" y="30" width="22" height="8" rx="4" fill="#FF8A65"/>
    <path d="M14 31.5l3 5M19.5 31.5l3 5M25 31.5l3 5" stroke="#FFC2A8" stroke-width="1.6" stroke-linecap="round"/>
    <rect x="34" y="35" width="20" height="10" rx="5" fill="#fff"/>
    <rect x="34" y="40" width="20" height="5" rx="2.5" fill="#EEE8D8"/>
    <rect x="33" y="30" width="22" height="8" rx="4" fill="#FFD66B"/>
    <rect x="42" y="29" width="5" height="16" rx="1.5" fill="#24306E"/>
    <path d="M32 22c-5-3.5-6.2-6-6.2-7.8a3.1 3.1 0 0 1 6.2-1a3.1 3.1 0 0 1 6.2 1c0 1.8-1.2 4.3-6.2 7.8z" fill="#FF6B5B"/>
    <ellipse cx="29.5" cy="14.5" rx="1" ry="1.6" fill="#fff" opacity=".7"/>
  `),
  gift: svg(`
    <rect x="12" y="30" width="40" height="25" rx="5" fill="#B49CF2"/>
    <path d="M40 30h7a5 5 0 0 1 5 5v15a5 5 0 0 1-5 5h-7z" fill="#9A7FE6"/>
    <rect x="9" y="23" width="46" height="10" rx="4" fill="#C9B6FA"/>
    <rect x="29" y="23" width="6" height="32" fill="#FFD66B"/>
    <ellipse cx="25" cy="18" rx="8" ry="5" transform="rotate(20 25 18)" fill="#FFD66B"/>
    <ellipse cx="39" cy="18" rx="8" ry="5" transform="rotate(-20 39 18)" fill="#FFD66B"/>
    <circle cx="32" cy="21" r="3.5" fill="#F2B33D"/>
    <ellipse cx="16" cy="38" rx="1.6" ry="4" fill="#fff" opacity=".5"/>
  `),
  phone: svg(`
    <rect x="19" y="7" width="27" height="48" rx="8" fill="#24306E"/>
    <rect x="22.5" y="13" width="20" height="35" rx="3.5" fill="#8EC3F0"/>
    <rect x="26" y="35" width="3" height="7" rx="1" fill="#FFE59E"/>
    <rect x="31" y="31" width="3" height="11" rx="1" fill="#FFE59E"/>
    <rect x="36" y="26" width="3" height="16" rx="1" fill="#FFE59E"/>
    <rect x="28" y="9.5" width="9" height="2" rx="1" fill="#3D4A8C"/>
    <circle cx="32.5" cy="51.5" r="1.6" fill="#3D4A8C"/>
    <circle cx="50" cy="16" r="6" fill="#FF6B5B"/>
    <path d="M47.5 16h5M50 13.5v5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
  `),
  health: svg(`
    <g transform="rotate(-35 30 30)">
      <rect x="12" y="22" width="36" height="16" rx="8" fill="#fff"/>
      <path d="M20 22h10v16H20a8 8 0 0 1 0-16z" fill="#FF6B5B"/>
      <rect x="14" y="25" width="10" height="3" rx="1.5" fill="#fff" opacity=".6"/>
    </g>
    <circle cx="45" cy="45" r="10" fill="#7FD6B0"/>
    <circle cx="47" cy="47" r="8" fill="#4FB38A" opacity=".35"/>
    <path d="M45 40v10M40 45h10" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
  `),
  bills: svg(`
    <path d="M32 6v4M14 13l3 3M50 13l-3 3M8 28h4M52 28h4" stroke="#FFD66B" stroke-width="3" stroke-linecap="round"/>
    <circle cx="32" cy="28" r="15" fill="#FFE59E"/>
    <path d="M38 15a15 15 0 0 1 0 26c4-6 4-20 0-26z" fill="#FFD66B"/>
    <ellipse cx="25" cy="23" rx="2.6" ry="4.6" fill="#fff" opacity=".7"/>
    <rect x="25" y="40" width="14" height="12" rx="3.5" fill="#B9C0DE"/>
    <path d="M25 44.5h14M25 48h14" stroke="#8E97C2" stroke-width="1.8"/>
    <rect x="28" y="51" width="8" height="4" rx="2" fill="#56608E"/>
  `),
  games: svg(`
    <path d="M18 22h28a12 12 0 0 1 11.6 15l-2.4 9a6 6 0 0 1-10.4 2.2L41 44H23l-3.8 4.2a6 6 0 0 1-10.4-2.2l-2.4-9A12 12 0 0 1 18 22z" fill="#FF8FA3"/>
    <path d="M32 44h9l3.8 4.2a6 6 0 0 0 10.4-2.2l2.4-9A12 12 0 0 0 48 22.1c4 7 0 18-16 21.9z" fill="#F2728B"/>
    <path d="M19 28v10M14 33h10" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="43" cy="30" r="2.8" fill="#FFD66B"/>
    <circle cx="49" cy="35" r="2.8" fill="#8EC3F0"/>
    <ellipse cx="16" cy="25.5" rx="3" ry="1.4" fill="#fff" opacity=".55"/>
  `),
  books: svg(`
    <rect x="13" y="10" width="34" height="44" rx="4" fill="#7FD6B0"/>
    <rect x="40" y="10" width="7" height="44" rx="3" fill="#4FB38A"/>
    <rect x="17" y="47" width="30" height="7" rx="2" fill="#FFFDF4"/>
    <rect x="19" y="18" width="16" height="9" rx="2.5" fill="#FFFDF4"/>
    <path d="M44 6v14l3.5-3 3.5 3V6z" fill="#FF6B5B"/>
    <ellipse cx="17" cy="26" rx="1.4" ry="4" fill="#fff" opacity=".5"/>
  `),
  toiletries: svg(`
    <rect x="21" y="13" width="15" height="5" rx="2.5" fill="#5A9EDB"/>
    <rect x="32" y="13" width="9" height="3.4" rx="1.7" fill="#5A9EDB"/>
    <rect x="24" y="17" width="9" height="8" rx="2" fill="#C5E9DA"/>
    <rect x="15" y="24" width="27" height="31" rx="7" fill="#7FD6B0"/>
    <path d="M33 24h2a7 7 0 0 1 7 7v17a7 7 0 0 1-7 7h-2z" fill="#4FB38A"/>
    <rect x="20" y="33" width="13" height="12" rx="3.5" fill="#FFFDF4"/>
    <path d="M26.5 36c-2.4 3-3 4.3-3 5.3a3 3 0 0 0 6 0c0-1-.6-2.3-3-5.3z" fill="#8EC3F0"/>
    <ellipse cx="19.5" cy="30" rx="1.6" ry="3.2" fill="#fff" opacity=".6"/>
    <rect x="36" y="45" width="22" height="10" rx="4" fill="#FFD66B"/>
    <rect x="36" y="45" width="22" height="5.5" rx="2.75" fill="#FFE59E"/>
    <circle cx="50" cy="35" r="4.5" fill="#DDF0FF"/>
    <circle cx="48.6" cy="33.6" r="1.2" fill="#fff"/>
    <circle cx="56" cy="27" r="2.8" fill="#DDF0FF"/>
    <circle cx="47" cy="25" r="1.8" fill="#DDF0FF"/>
  `),
  clothes: svg(`
    <path d="M18 12 L7 18.5 L11.5 28 L16 25.5 V48 a3 3 0 0 0 3 3 H35 a3 3 0 0 0 3-3 V25.5 L42.5 28 L47 18.5 L36 12 Q27 18 18 12 Z" fill="#FF6B5B" stroke="#FF6B5B" stroke-width="3" stroke-linejoin="round"/>
    <path d="M38 25.5 L42.5 28 L47 18.5 L41 15 Z" fill="#E0503F" stroke="#E0503F" stroke-width="3" stroke-linejoin="round"/>
    <path d="M22.5 14.3 Q27 18.5 31.5 14.3" stroke="#E0503F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <rect x="22" y="27" width="7" height="7" rx="2" fill="#FFD66B"/>
    <ellipse cx="12" cy="21" rx="1.5" ry="3.2" transform="rotate(-30 12 21)" fill="#fff" opacity=".55"/>
    <rect x="32" y="35" width="26" height="18" rx="4.5" fill="#5A9EDB"/>
    <path d="M32 45h26v3.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 32 48.5z" fill="#3F82C2"/>
    <path d="M35.5 40.5h19" stroke="#FFD66B" stroke-width="1.6" stroke-dasharray="2.6 2" stroke-linecap="round"/>
    <circle cx="53.5" cy="47.5" r="1.6" fill="#FFE59E"/>
    <rect x="35" y="37" width="7" height="1.6" rx=".8" fill="#fff" opacity=".5"/>
  `),
  wallet: svg(`
    <rect x="13" y="10" width="32" height="18" rx="3.5" fill="#9BCB7E" transform="rotate(-9 29 19)"/>
    <rect x="16" y="13" width="26" height="12" rx="2.5" fill="#BFE3A6" transform="rotate(-9 29 19)"/>
    <circle cx="29" cy="19" r="3.6" fill="#9BCB7E" transform="rotate(-9 29 19)"/>
    <rect x="7" y="22" width="48" height="33" rx="8" fill="#4FB38A"/>
    <rect x="7" y="25" width="44" height="30" rx="8" fill="#7FD6B0"/>
    <rect x="38" y="32" width="20" height="13" rx="5" fill="#4FB38A"/>
    <circle cx="46" cy="38.5" r="2.8" fill="#FFE59E"/>
    <ellipse cx="15" cy="34" rx="2" ry="5" fill="#fff" opacity=".55"/>
    <circle cx="52" cy="14" r="7.5" fill="#FFD66B"/>
    <circle cx="51" cy="13" r="5" fill="#FFE59E"/>
    <circle cx="57" cy="24" r="4" fill="#FFD66B"/>
  `),
  notebook: svg(`
    <rect x="14" y="9" width="36" height="46" rx="5" fill="#5A9EDB"/>
    <rect x="17" y="9" width="33" height="44" rx="4" fill="#8EC3F0"/>
    <rect x="22" y="15" width="22" height="9" rx="2.5" fill="#FFFDF4"/>
    <circle cx="14" cy="17" r="2.5" fill="#24306E"/><circle cx="14" cy="27" r="2.5" fill="#24306E"/>
    <circle cx="14" cy="37" r="2.5" fill="#24306E"/><circle cx="14" cy="47" r="2.5" fill="#24306E"/>
    <g transform="rotate(35 44 40)">
      <rect x="40" y="22" width="8" height="30" rx="2" fill="#FFD66B"/>
      <rect x="44" y="22" width="4" height="30" fill="#F2B33D"/>
      <rect x="40" y="18" width="8" height="6" rx="2" fill="#FF8FA3"/>
      <path d="M40 52h8l-4 7z" fill="#F7E3C1"/><path d="M42.6 56.5h2.8L44 59z" fill="#24306E"/>
    </g>
  `),
};

// Small doodles for headings and decoration
const DOODLE = {
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.6 6 6.4.6-4.9 4.3 1.5 6.3L12 16.4 6.4 19.7l1.5-6.3L3 9.1l6.4-.6z" fill="#FFD66B" stroke="#F2B33D" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 6 4 9 10 10-6 1-9 4-10 10-1-6-4-9-10-10 6-1 9-4 10-10z" fill="#FF8FA3"/><circle cx="20" cy="4" r="1.6" fill="#8EC3F0"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20c-6-4-8.5-7-8.5-10a4.3 4.3 0 0 1 8.5-1.3A4.3 4.3 0 0 1 20.5 10c0 3-2.5 6-8.5 10z" fill="#FF6B5B"/><ellipse cx="8" cy="9" rx="1.2" ry="2" fill="#fff" opacity=".6"/></svg>',
  squiggle: '<svg viewBox="0 0 48 12" aria-hidden="true"><path d="M2 6c4-6 8 6 12 0s8 6 12 0 8 6 12 0 6 4 8 2" fill="none" stroke="#7FD6B0" stroke-width="3" stroke-linecap="round"/></svg>',
};
