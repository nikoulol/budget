// Calm picnic at the eco park: sky, lagoon with a swan boat, pines, picnic blanket with sushi.
// Doodle couple walking hand in hand, drawn loose like a phone sketch:
// black line, a soft grey line offset to the lower left, flat white fill, wobble filter.
// Feet at y=0, she is on the left, he is on the right.
const INK = '#151515', GREY = '#A3A3A3';
const OFF = 'translate(-1.1 .6)';
const shape = (d, sw = 1.6) => `<path d="${d}" fill="none" stroke="${GREY}" stroke-width="${sw - .2}" stroke-linejoin="round" transform="${OFF}"/><path d="${d}" fill="#fff"/><path d="${d}" fill="none" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round"/>`;
const ring = (r, sw = 1.6) => `<circle r="${r}" fill="none" stroke="${GREY}" stroke-width="${sw - .2}" transform="${OFF}"/><circle r="${r}" fill="#fff" stroke="${INK}" stroke-width="${sw}"/>`;
const tube = d => `<path d="${d}" fill="none" stroke="${GREY}" stroke-width="4.4" stroke-linecap="round" transform="${OFF}"/><path d="${d}" fill="none" stroke="${INK}" stroke-width="4.6" stroke-linecap="round"/><path d="${d}" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>`;
const mitt = (x, y, r) => `<g transform="translate(${x} ${y})">${ring(r, 1.4)}</g>`;
const FOOT = shape('M-4.2 0 C-4.4 -3.4 -2 -4.8 .6 -4.8 C3.8 -4.8 5.8 -2.6 5.2 0 Z', 1.4);
const eye = (x, y, rx, ry) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${INK}"/><circle cx="${x - rx * .22}" cy="${y - ry * .3}" r="${rx * .5}" fill="#fff"/>`;
const blush = (x, y) => `<path d="M${x} ${y} l3 -2.1 M${x + 2} ${y + 1.2} l3 -2.1 M${x + 4} ${y + 2.4} l3 -2.1" stroke="#FF5FA0" stroke-width="1.6" stroke-linecap="round" opacity=".85"/>`;
// thin sketchy glasses: two light rings, a bridge and short arms to the side of the head
const specs = (lx, rx, y, r, left, right) => `<g fill="none" stroke="#6E6E6E" stroke-width=".55" stroke-linecap="round">
  <circle cx="${lx}" cy="${y}" r="${r}"/><circle cx="${rx}" cy="${y}" r="${r}"/>
  <path d="M${lx + r} ${y - .4} Q${(lx + rx) / 2} ${y - 1.8} ${rx - r} ${y - .4} M${lx - r} ${y} L${left} ${y - 1.2} M${rx + r} ${y} L${right} ${y - 1}"/></g>`;

const HER_HEAD = `
  <g transform="translate(0 -34)"><g class="htilt">
    ${ring(13)}
    <g class="blink">${eye(-3.6, 0.8, 3.3, 3.9)}${eye(6.1, 0.6, 3.3, 3.9)}</g>
    ${specs(-3.6, 6.1, 0.7, 4.8, -12.6, 12.6)}
    ${blush(-10, 6.6)}${blush(2.6, 6.8)}
    <g transform="translate(7.5 -10.5) rotate(18)"><g class="bow">
      <path d="M0 0 C-5.5 -4.8 -7 2.4 -1.6 2 Z" fill="#FF8FB1" stroke="#E0527F" stroke-width=".9" stroke-linejoin="round"/>
      <path d="M0 0 C5.5 -4.8 7 2.4 1.6 2 Z" fill="#FF8FB1" stroke="#E0527F" stroke-width=".9" stroke-linejoin="round"/>
      <path d="M-.4 .8 L-2 4.6 M.4 .8 L2 4.4" stroke="#E0527F" stroke-width="1.1" stroke-linecap="round"/>
      <circle r="1.7" fill="#FF6FA0" stroke="#E0527F" stroke-width=".8"/>
    </g></g>
  </g></g>`;

const HIS_HEAD = `
  <g transform="translate(0 -41)"><g class="htilt b">
    ${ring(15)}
    <g class="blink b">${eye(-4, 0.8, 3.7, 4.3)}${eye(7.4, 0.6, 3.7, 4.3)}</g>
    ${specs(-4, 7.4, 0.7, 5.3, -14.6, 14.6)}
    ${blush(-11.6, 7.6)}${blush(3.6, 7.8)}
  </g></g>`;

const COUPLE = `
  <g transform="translate(0 194) scale(1.15)">
    <g class="runner">
      <g class="hearts" transform="translate(15 -62)">
        <path class="h1" d="M0 3 C-4 0 -5 -2 -5 -3.4 a2.4 2.4 0 0 1 5 -.8 a2.4 2.4 0 0 1 5 .8 C5 -2 4 0 0 3z" fill="#FF6B8A"/>
        <g transform="translate(8 3) scale(.7)"><path class="h2" d="M0 3 C-4 0 -5 -2 -5 -3.4 a2.4 2.4 0 0 1 5 -.8 a2.4 2.4 0 0 1 5 .8 C5 -2 4 0 0 3z" fill="#FFA6B8"/></g>
      </g>
      <ellipse class="shadow" cx="0.5" cy="0.4" rx="11" ry="2.2" fill="#3E8F57" opacity=".3"/>
      <ellipse class="shadow" cx="30.5" cy="0.4" rx="12.5" ry="2.4" fill="#3E8F57" opacity=".3"/>
      <g filter="url(#sketchy)">
        <g transform="translate(-4.2 0)"><g class="stepA">${FOOT}</g></g>
        <g transform="translate(4 0)"><g class="stepB">${FOOT}</g></g>
        <g transform="translate(25.2 0) scale(1.15)"><g class="stepA">${FOOT}</g></g>
        <g transform="translate(35 0) scale(1.15)"><g class="stepB">${FOOT}</g></g>
        <g class="bob">
          <g transform="translate(-7 -18)"><g class="swingA">${tube('M0 0 C-1.8 3 -3.2 6 -3.9 9')}${mitt(-4.1, 10.4, 2.7)}</g></g>
          ${tube('M7 -18 C9.8 -15 12.2 -12 14 -9.4')}${mitt(14.3, -8.6, 2.8)}
          <g transform="translate(30 0)">
            ${tube('M-8.4 -22 C-11 -17.5 -14.4 -12.5 -16.2 -9.2')}
            <g transform="translate(8.4 -22)"><g class="swingB">${tube('M0 0 C1.9 3.6 3.4 7 4 10')}${mitt(4.3, 11.6, 3)}</g></g>
          </g>
          ${shape('M-7.5 -22 C-8.6 -14 -9.2 -8 -8.2 -3 L-1.4 -3 Q0 -6 1.4 -3 L8.2 -3 C9.2 -8 8.5 -14 7.5 -22 Z')}
          <g transform="translate(30 0)">${shape('M-9 -27 C-10.2 -17 -10.8 -9 -9.6 -3 L-1.6 -3 Q0 -6.5 1.6 -3 L9.6 -3 C10.8 -9 10.2 -17 9 -27 Z')}</g>
          ${mitt(15.9, -8.1, 3)}
          ${HER_HEAD}
          <g transform="translate(30 0)">${HIS_HEAD}</g>
        </g>
      </g>
    </g>
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
