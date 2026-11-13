// Calm picnic at the eco park: sky, lagoon with a swan boat, pines, picnic blanket with sushi.
// Two doodle cats chilling side by side at the picnic: a dark cat and a white cat leaning on it.
// Thick marker outline, flat fills, a light wobble filter. Feet sit at y=0.
const INK = '#141414', LINE = 'stroke="#141414" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"';
const heartPath = 'M0 3 C-4 0 -5 -2 -5 -3.4 a2.4 2.4 0 0 1 5 -.8 a2.4 2.4 0 0 1 5 .8 C5 -2 4 0 0 3z';

const DARK_CAT = `
  <g class="darkcat">
    <path d="M-30 0 C-33 -6 -34 -16 -32 -24 C-38 -28 -40 -38 -36 -46 L-34 -57 L-25 -50.5 Q-17 -52.5 -10 -50.5 L-2.5 -57.5 L-1 -45 C2 -38 0 -30 -6 -27 C-2 -18 -2 -8 -4 0 Q-9 3 -13 0 Q-17 3 -21 0 Q-25 3 -30 0 Z" fill="#4A4549" ${LINE}/>
    <g class="whisk l"><path d="M-44 -39 L-54 -40 M-44.5 -34.5 L-52.5 -32.5" fill="none" ${LINE}/></g>
    <path d="M-28.5 -41 L-24.5 -41.6 M-17.5 -41.6 L-13.5 -41" fill="none" ${LINE}/>
    <path d="M-23.6 -35.4 q1.6 3 3.2 0 q1.6 3 3.2 0" fill="none" stroke="${INK}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="-32" cy="-36.6" rx="3.2" ry="1.9" fill="#F4A3B4"/>
  </g>`;

const WHITE_CAT = `
  <g class="whitecat">
    <g transform="translate(29 -6)"><g class="tail">
      <path d="M0 0 Q11 2 12 -8 Q12.4 -13.6 8 -12.8" fill="none" stroke="${INK}" stroke-width="6.2" stroke-linecap="round"/>
      <path d="M0 0 Q11 2 12 -8 Q12.4 -13.6 8 -12.8" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
    </g></g>
    <path d="M-3 0 C-6 -10 -8 -20 -6 -27 C-12 -31 -12.5 -40 -6.5 -45 L-4.5 -56 L4 -48.5 Q11 -50.5 17 -47.5 L25.5 -54 L26.5 -42 C31.5 -36 30 -28 24 -26 C30 -20 33 -10 30 -4 Q29 2 22 0 Q18 3 14 0 Q10 3 6 0 Q2 3 -3 0 Z" fill="#fff" ${LINE}/>
    <g class="whisk r"><path d="M34 -37 L44 -38 M34.5 -32.5 L42.5 -30.5" fill="none" ${LINE}/></g>
    <g class="squint"><path d="M-0.5 -40.6 L3.8 -38.4 L-0.5 -36.2 M19 -40.6 L14.7 -38.4 L19 -36.2" fill="none" ${LINE}/></g>
    <g class="open"><circle cx="1.6" cy="-38.4" r="1.7" fill="${INK}"/><circle cx="16.8" cy="-38.4" r="1.7" fill="${INK}"/></g>
    <path d="M5.8 -32.4 q1.7 3.2 3.4 0 q1.7 3.2 3.4 0" fill="none" stroke="${INK}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="22.6" cy="-33.4" rx="3.4" ry="2" fill="#F4A3B4"/>
  </g>`;

const COUPLE = `
  <g transform="translate(90 193) scale(1.05)">
    <ellipse cx="0" cy="0.8" rx="40" ry="3.2" fill="#3E8F57" opacity=".28"/>
    <g class="hearts" transform="translate(-6 -68)">
      <path class="h1" d="${heartPath}" fill="#F4A3B4"/>
      <g transform="translate(9 4) scale(.65)"><path class="h2" d="${heartPath}" fill="#F7BFCB"/></g>
    </g>
    <g filter="url(#sketchy)">${DARK_CAT}${WHITE_CAT}</g>
  </g>`;

const FLOWERS = `
  <g class="flowers">
    <g transform="translate(12 200)"><g class="sway s1"><path d="M0 0 Q-2 -12 1 -22" stroke="#4E9E5E" stroke-width="2" fill="none"/><ellipse cx="-4" cy="-9" rx="4" ry="1.8" transform="rotate(-30 -4 -9)" fill="#5DB06C"/>
      <g transform="translate(1 -24)"><circle cx="0" cy="-4" r="3.2" fill="#FFD66B"/><circle cx="3.8" cy="-1.2" r="3.2" fill="#FFD66B"/><circle cx="2.4" cy="3.2" r="3.2" fill="#FFD66B"/><circle cx="-2.4" cy="3.2" r="3.2" fill="#FFD66B"/><circle cx="-3.8" cy="-1.2" r="3.2" fill="#FFD66B"/><circle r="2.4" fill="#FF8A65"/></g></g></g>
    <g transform="translate(30 200)"><g class="sway s2"><path d="M0 0 Q2 -8 0 -15" stroke="#4E9E5E" stroke-width="2" fill="none"/>
      <g transform="translate(0 -17)"><circle cx="0" cy="-3.4" r="2.8" fill="#FF8FB1"/><circle cx="3.2" cy="-1" r="2.8" fill="#FF8FB1"/><circle cx="2" cy="2.8" r="2.8" fill="#FF8FB1"/><circle cx="-2" cy="2.8" r="2.8" fill="#FF8FB1"/><circle cx="-3.2" cy="-1" r="2.8" fill="#FF8FB1"/><circle r="2" fill="#FFE59E"/></g></g></g>
    <g transform="translate(372 200)"><g class="sway s3"><path d="M0 0 Q-3 -12 0 -24" stroke="#4E9E5E" stroke-width="2" fill="none"/><ellipse cx="4" cy="-10" rx="4.4" ry="1.8" transform="rotate(30 4 -10)" fill="#5DB06C"/>
      <g transform="translate(0 -27)"><path d="M-5 -2 Q-5 6 0 6 Q5 6 5 -2 L2.5 0 L0 -4 L-2.5 0 Z" fill="#FF5C6E"/><path d="M0 -4 L2.5 0 L5 -2 Q5 6 0 6 Q3 2 0 -4z" fill="#E0465A"/></g></g></g>
    <g transform="translate(388 200)"><g class="sway s1"><path d="M0 0 Q2 -8 0 -14" stroke="#4E9E5E" stroke-width="2" fill="none"/>
      <g transform="translate(0 -16)"><circle cx="0" cy="-3" r="2.6" fill="#8EC3F0"/><circle cx="2.9" cy="-.9" r="2.6" fill="#8EC3F0"/><circle cx="1.8" cy="2.5" r="2.6" fill="#8EC3F0"/><circle cx="-1.8" cy="2.5" r="2.6" fill="#8EC3F0"/><circle cx="-2.9" cy="-.9" r="2.6" fill="#8EC3F0"/><circle r="1.8" fill="#FFE59E"/></g></g></g>
    <g transform="translate(356 200)"><g class="sway s2"><path d="M0 0 Q1 -6 0 -11" stroke="#4E9E5E" stroke-width="2" fill="none"/>
      <g transform="translate(0 -13)"><circle cx="0" cy="-2.6" r="2.3" fill="#FF8FB1"/><circle cx="2.5" cy="-.8" r="2.3" fill="#FF8FB1"/><circle cx="1.5" cy="2.2" r="2.3" fill="#FF8FB1"/><circle cx="-1.5" cy="2.2" r="2.3" fill="#FF8FB1"/><circle cx="-2.5" cy="-.8" r="2.3" fill="#FF8FB1"/><circle r="1.6" fill="#FFE59E"/></g></g></g>
  </g>`;

function sceneSVG(){
  return `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
  <defs>
    <clipPath id="blanketClip"><path d="M112 162 L238 162 L262 196 L88 196 Z"/></clipPath>
    <filter id="sketchy" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency=".09" numOctaves="2" seed="7" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <rect width="400" height="200" fill="#CFE8FF"/>
  <rect y="96" width="400" height="40" fill="#DDEFFF"/>
  <g class="sun"><circle cx="362" cy="86" r="26" fill="#FFF3C4"/><circle cx="362" cy="86" r="17" fill="#FFE59E"/></g>
  <g class="cloud c1"><ellipse cx="70" cy="46" rx="28" ry="11" fill="#fff"/><ellipse cx="88" cy="39" rx="17" ry="13" fill="#fff"/><ellipse cx="56" cy="41" rx="13" ry="10" fill="#fff"/></g>
  <g class="cloud c2"><ellipse cx="226" cy="30" rx="20" ry="8" fill="#fff"/><ellipse cx="238" cy="25" rx="12" ry="9" fill="#fff"/></g>
  <g class="cloud c3"><ellipse cx="160" cy="70" rx="16" ry="6" fill="#fff" opacity=".85"/><ellipse cx="168" cy="66" rx="9" ry="6" fill="#fff" opacity=".85"/></g>
  <path d="M0 122 Q60 96 120 112 T250 104 T400 108 V200 H0z" fill="#B8E2BE"/>
  <g fill="#4FA56E">
    <path d="M22 116 l10 -26 l10 26z"/><path d="M40 114 l12 -32 l12 32z"/><path d="M262 108 l11 -28 l11 28z"/><path d="M380 110 l9 -24 l9 24z"/>
  </g>
  <g><rect x="86" y="96" width="4" height="16" fill="#A67C52"/><circle cx="88" cy="92" r="11" fill="#6CC184"/><circle cx="92" cy="89" r="6" fill="#86D39A"/></g>
  <g><rect x="230" y="92" width="4" height="16" fill="#A67C52"/><circle cx="232" cy="88" r="12" fill="#5DB774"/><circle cx="236" cy="84" r="6" fill="#7FCB8A"/></g>
  <path d="M0 138 Q100 122 200 132 T400 128 V200 H0z" fill="#93D29E"/>
  <ellipse cx="318" cy="146" rx="66" ry="13" fill="#8EC3F0"/>
  <ellipse cx="300" cy="143" rx="28" ry="3" fill="#DDF0FF" class="ripple"/>
  <g class="swan">
    <path d="M318 146 q13 7 28 0 l-3 -7 h-22z" fill="#fff"/>
    <path d="M343 139 q5 -13 -2 -15 q-6 0 -3 5" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M338 128 l-4 1.5 l4 1.5z" fill="#FFB23E"/>
    <path d="M322 141 q8 4 16 0" stroke="#E4EEF7" stroke-width="2" fill="none"/>
  </g>
  <path d="M0 156 Q120 144 240 152 T400 150 V200 H0z" fill="#7FCB8A"/>
  <g stroke="#5DB06C" stroke-width="2" stroke-linecap="round" class="blades">
    <path d="M20 176 l-2 -8M24 176 l2 -9M60 186 l-3 -8M64 186 l1 -9M300 180 l-2 -8M305 180 l2 -9M360 172 l-2 -7M364 172 l2 -8"/>
  </g>
  <g><circle cx="40" cy="166" r="3" fill="#FFA6B8"/><circle cx="40" cy="166" r="1.2" fill="#FFE59E"/>
     <circle cx="330" cy="168" r="3" fill="#fff"/><circle cx="330" cy="168" r="1.2" fill="#FFD66B"/>
     <circle cx="372" cy="186" r="3" fill="#FFA6B8"/><circle cx="372" cy="186" r="1.2" fill="#FFE59E"/>
     <circle cx="282" cy="190" r="3" fill="#FFD66B"/></g>
  <path d="M112 162 L238 162 L262 196 L88 196 Z" fill="#FF8A7C"/>
  <g clip-path="url(#blanketClip)" fill="#fff" opacity=".42">
    <rect x="80" y="168" width="200" height="6"/><rect x="80" y="182" width="200" height="6"/>
    <path d="M118 162h7l-8 34h-7zM146 162h7l-3 34h-7zM174 162h7l2 34h-7zM202 162h7l7 34h-7zM230 162h7l12 34h-7z"/>
  </g>
  <g class="basket">
    <path d="M216 156 q11 -16 22 0" stroke="#B5813F" stroke-width="3" fill="none"/>
    <rect x="212" y="154" width="30" height="17" rx="4" fill="#D9A066"/>
    <rect x="212" y="154" width="30" height="5" rx="2.5" fill="#E8B984"/>
    <path d="M220 160v10M227 160v10M234 160v10" stroke="#C48A4E" stroke-width="1.5"/>
  </g>
  <g class="bento">
    <rect x="148" y="176" width="52" height="13" rx="3" fill="#3B2B4A"/>
    <rect x="152" y="174" width="10" height="7" rx="3" fill="#fff"/><rect x="151" y="171" width="12" height="4.5" rx="2" fill="#FF8A65"/>
    <rect x="166" y="174" width="10" height="7" rx="3" fill="#fff"/><rect x="165" y="171" width="12" height="4.5" rx="2" fill="#FF8A65"/>
    <circle cx="186" cy="178" r="4.6" fill="#24306E"/><circle cx="186" cy="178" r="3" fill="#fff"/><circle cx="186" cy="178" r="1.4" fill="#FF8FA3"/>
    <circle cx="195" cy="178" r="4.6" fill="#24306E"/><circle cx="195" cy="178" r="3" fill="#fff"/><circle cx="195" cy="178" r="1.4" fill="#7FD6B0"/>
    <path d="M200 170 l14 -6M201 173 l14 -5" stroke="#C08A5B" stroke-width="1.8" stroke-linecap="round"/>
  </g>
  <g class="couple">${COUPLE}</g>
  ${FLOWERS}
  <g class="fly"><ellipse cx="0" cy="0" rx="3.6" ry="2.4" fill="#FFA6B8" transform="rotate(-30)"/><ellipse cx="3" cy="1" rx="3" ry="2" fill="#FFC2CE" transform="rotate(30)"/></g>
  </svg>`;
}
