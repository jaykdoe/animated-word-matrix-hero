import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { addToLocalStorage, getFromLocalStorage, isItemInLocalStorage } from "@/lib/local-storage"

interface effectProps {
  effect: string | null
}

interface multiColorSelectProps {
  userSelectedEffect:  "multicolor" | "monocolor" | string | null
  onChange: (value: string) => void
}

export function MulticolorSelect({ userSelectedEffect, onChange }: multiColorSelectProps) {
  const [selectedEffect, setSelectedEffect] = useState(userSelectedEffect)
  const handleChange = {onChange}

const items = [

  { label: "MultiColor", value: "multicolor", icon: <MulticolorIcon size={24} /> },
  { label: "MonoColor", value: "monocolor", icon: <MonocolorIcon size={24} /> },
]
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffr const handleValueChange = (value: multiColorSelectProps ["userSelectedEffect"]) => {
const currentEffect = isItemInLocalStorage("colorEffect") === true ? getFromLocalStorage("colorEffect") : null
currentEffect !== null ? currentEffect === "multicolor" ? addToLocalStorage("colorEffect", value) : addToLocalStorage("colorEffect", value) : addToLocalStorage("colorEffect", value)
  setSelectedEffect(value)
  console.log(value)
} 

  return (
    <div className="w-full max-w-48 bg-transparent">
    <Select items={items} value={userSelectedEffect} onValueChange={onChange}>
      <SelectTrigger className="w-48 max-w-64 bg-black/40 backdrop-blur-md text-black dark:text-white border-2 border-black dark:border-white  *:data-[slot=select-value]:gap-2">
        <SelectValue placeholder="Color Effect">{userSelectedEffect}</SelectValue>
      </SelectTrigger>
      <SelectContent
        className="w-48 max-w-64 bg-white/20 dark:bg-black/40 backdrop-blur-md"
      side = "bottom"
      sideOffset = {4}
      align = "center"
      alignOffset = {0}
      alignItemWithTrigger = {true}
      >
        <SelectGroup>
          <SelectLabel>Color Effects</SelectLabel>
          {items.map(({ label, value, icon }) => (
            <SelectItem key={value} value={value}>
              {icon}
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>

    </div>
  )
}

const MulticolorIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => {
  return (
    <div className={`flex items-center justify-center` + className}>
      <svg width={size + `px`} height={size + `px`} viewBox="0 0 24.000001 24.000001" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <filter id="a" colorInterpolationFilters="sRGB" height="1.336" width="1.336" x="-.168" y="-.168">
          <feGaussianBlur stdDeviation="1.5400003" />
        </filter>
        <linearGradient id="b" gradientTransform="matrix(1.0283134 0 0 .98361153 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="17.871185" x2="17.871185" y1="7.668531" y2="17.89324">
          <stop offset="0" stopColor="#fbb114" />
          <stop offset="1" stopColor="#ff9508" />
        </linearGradient>
        <linearGradient id="c" gradientTransform="matrix(.94465199 0 0 1.0707233 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="23.954397" x2="23.954397" y1="8.60988" y2="19.256279">
          <stop offset="0" stopColor="#ff645d" />
          <stop offset="1" stopColor="#ff4332" />
        </linearGradient>
        <linearGradient id="d" gradientTransform="matrix(1.1037078 0 0 .91642091 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="20.12693" x2="20.12693" y1="19.205147" y2="29.033293">
          <stop offset="0" stopColor="#ca70e1" />
          <stop offset="1" stopColor="#b452cb" />
        </linearGradient>
        <linearGradient id="e" gradientTransform="matrix(1.0283134 0 0 .98361158 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="16.359619" x2="16.359619" y1="17.89324" y2="28.117949">
          <stop offset="0" stopColor="#14adf6" />
          <stop offset="1" stopColor="#1191f4" />
        </linearGradient>
        <linearGradient id="f" gradientTransform="matrix(.94465199 0 0 1.0707233 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="13.307998" x2="13.307998" y1="13.618688" y2="24.265087">
          <stop offset="0" stopColor="#52cf30" />
          <stop offset="1" stopColor="#3bbd1c" />
        </linearGradient>
        <linearGradient id="g" gradientTransform="matrix(1.1037078 0 0 .91642092 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="11.765563" x2="11.765563" y1="9.376999" y2="19.205147">
          <stop offset="0" stopColor="#ffd305" />
          <stop offset="1" stopColor="#fdcf01" />
        </linearGradient>
        <g fillRule="evenodd">
          <g filter="url(#a)" opacity=".2" transform="matrix(.81818153 0 0 .81818153 -283.30046 -654.25924)">
            <circle cx="360.92291" cy="814.31714" r="10.999999" />
            <path d="m367.00513 805.15019c.33342.78907.51778 1.65647.51778 2.56694 0 3.64508-2.95492 6.6-6.6 6.6 1.82253-3.15674.74096-7.19323-2.41577-9.01576-.78918-.45563-1.63334-.72977-2.48415-.83534 1.47548-.73531 3.13939-1.1489 4.89992-1.1489 2.24884 0 4.34007.67484 6.08222 1.83306z" />
            <path d="m371.90192 815.0022c-.51649.68278-1.17521 1.27572-1.96325 1.7307-3.15672 1.82254-7.19323.74097-9.01576-2.41577 3.64508 0 6.6-2.95492 6.6-6.6 0-.91047-.18436-1.77787-.51778-2.56694 2.96417 1.97065 4.91778 5.34066 4.91778 9.16694 0 .23008-.007.4585-.021.68507z" />
            <path d="m365.82282 824.16823c-.8508-.1056-1.69496-.3797-2.48415-.83534-3.15672-1.82253-4.2383-5.85902-2.41576-9.01576 1.82253 3.15674 5.85904 4.23831 9.01576 2.41577.78804-.45498 1.44676-1.04792 1.96325-1.7307-.24716 4.02231-2.65592 7.46006-6.0791 9.16603z" />
            <path d="m354.84069 823.48407c-.33342-.78907-.51778-1.65647-.51778-2.56694 0-3.64508 2.95492-6.6 6.6-6.6-1.82254 3.15674-.74096 7.19323 2.41576 9.01576.78919.45564 1.63335.72977 2.48415.83534-1.47547.73531-3.13938 1.1489-4.89991 1.1489-2.24884 0-4.34007-.67484-6.08222-1.83306z" />
            <path d="m349.9439 813.63206c.51649-.68278 1.1752-1.27572 1.96324-1.73069 3.15673-1.82255 7.19323-.74098 9.01577 2.41576-3.64508 0-6.6 2.95492-6.6 6.6 0 .91047.18436 1.77787.51778 2.56694-2.96417-1.97065-4.91778-5.34066-4.91778-9.16694 0-.23008.007-.4585.021-.68507z" />
            <path d="m356.02299 804.46603c.85081.1056 1.69497.37971 2.48415.83534 3.15673 1.82253 4.2383 5.85902 2.41577 9.01576-1.82254-3.15674-5.85904-4.23831-9.01577-2.41576-.78804.45497-1.44675 1.04791-1.96324 1.73069.24716-4.02231 2.65591-7.46005 6.07909-9.16603z" />
          </g>
          <g transform="matrix(.81818153 0 0 .81818153 -283.30046 -654.25924)">
            <circle cx="360.92291" cy="814.31714" r="10.999999" />
            <path d="m367.00513 805.15019c.33342.78907.51778 1.65647.51778 2.56694 0 3.64508-2.95492 6.6-6.6 6.6 1.82253-3.15674.74096-7.19323-2.41577-9.01576-.78918-.45563-1.63334-.72977-2.48415-.83534 1.47548-.73531 3.13939-1.1489 4.89992-1.1489 2.24884 0 4.34007.67484 6.08222 1.83306z" />
            <path d="m371.90192 815.0022c-.51649.68278-1.17521 1.27572-1.96325 1.7307-3.15672 1.82254-7.19323.74097-9.01576-2.41577 3.64508 0 6.6-2.95492 6.6-6.6 0-.91047-.18436-1.77787-.51778-2.56694 2.96417 1.97065 4.91778 5.34066 4.91778 9.16694 0 .23008-.007.4585-.021.68507z" />
            <path d="m365.82282 824.16823c-.8508-.1056-1.69496-.3797-2.48415-.83534-3.15672-1.82253-4.2383-5.85902-2.41576-9.01576 1.82253 3.15674 5.85904 4.23831 9.01576 2.41577.78804-.45498 1.44676-1.04792 1.96325-1.7307-.24716 4.02231-2.65592 7.46006-6.0791 9.16603z" />
            <path d="m354.84069 823.48407c-.33342-.78907-.51778-1.65647-.51778-2.56694 0-3.64508 2.95492-6.6 6.6-6.6-1.82254 3.15674-.74096 7.19323 2.41576 9.01576.78919.45564 1.63335.72977 2.48415.83534-1.47547.73531-3.13938 1.1489-4.89991 1.1489-2.24884 0-4.34007-.67484-6.08222-1.83306z" />
            <path d="m349.9439 813.63206c.51649-.68278 1.1752-1.27572 1.96324-1.73069 3.15673-1.82255 7.19323-.74098 9.01577 2.41576-3.64508 0-6.6 2.95492-6.6 6.6 0 .91047.18436 1.77787.51778 2.56694-2.96417-1.97065-4.91778-5.34066-4.91778-9.16694 0-.23008.007-.4585.021-.68507z" />
            <path d="m356.02299 804.46603c.85081.1056 1.69497.37971 2.48415.83534 3.15673 1.82253 4.2383 5.85902 2.41577 9.01576-1.82254-3.15674-5.85904-4.23831-9.01577-2.41576-.78804.45497-1.44675 1.04791-1.96324 1.73069.24716-4.02231 2.65591-7.46005 6.07909-9.16603z" />
          </g>
          <g transform="matrix(1.5588457 .9 -.9 1.5588457 3.917459 -25.365251)">
            <circle cx="14.267952" cy="15.732222" fill="#959595" r="4.25" strokeWidth=".422585" />
            <g transform="matrix(.42258514 0 0 .42258514 7.474854 8.157344)">
              <path d="m21.63598 9.54387c.30484.72142.4734 1.51448.4734 2.34692 0 3.33263-2.70163 6.03428-6.03428 6.03428 1.66632-2.88616.67745-6.57667-2.2087-8.243-.72154-.41657-1.49334-.6672-2.27123-.76373 1.34901-.67228 2.87031-1.05042 4.47993-1.05042 2.05608 0 3.96806.617 5.56088 1.67595z" fill="url(#b)" />
              <path d="m26.11305 18.55142c-.47222.62426-1.07448 1.16637-1.79497 1.58235-2.88615 1.66632-6.57666.67745-8.24298-2.2087 3.33265 0 6.03428-2.70165 6.03428-6.03428 0-.83244-.16856-1.6255-.4734-2.34692 2.7101 1.80173 4.49626 4.88288 4.49626 8.3812 0 .21035-.007.41919-.0191.62635z" fill="url(#c)" />
              <path d="m20.55501 26.93179c-.77787-.0965-1.54968-.34716-2.27121-.76374-2.88616-1.66632-3.87503-5.35683-2.2087-8.24298 1.66632 2.88615 5.35683 3.87502 8.24298 2.2087.72049-.41598 1.32275-.95809 1.79497-1.58235-.22598 3.67754-2.42826 6.82061-5.55804 8.38037z" fill="url(#d)" />
              <path d="m10.51421 26.30626c-.30484-.72142-.47339-1.51448-.47339-2.34691 0-3.33264 2.70163-6.03428 6.03428-6.03428-1.66633 2.88615-.67746 6.57666 2.2087 8.24298.72153.41658 1.49334.66721 2.27121.76374-1.34899.67228-2.87029 1.05042-4.47991 1.05042-2.05609 0-3.96806-.617-5.56089-1.67595z" fill="url(#e)" />
              <path d="m6.03715 17.29871c.47222-.62426 1.07448-1.16637 1.79496-1.58235 2.88615-1.66632 6.57666-.67745 8.24299 2.20871-3.33265 0-6.03428 2.70164-6.03428 6.03428 0 .83243.16855 1.62549.47339 2.34691-2.7101-1.80173-4.49626-4.88288-4.49626-8.38119 0-.21036.007-.4192.0191-.62636z" fill="url(#f)" />
              <path d="m11.59517 8.91834c.77789.0966 1.54969.34716 2.27123.76373 2.88615 1.66633 3.87502 5.35684 2.2087 8.243-1.66633-2.88616-5.35684-3.87503-8.24299-2.20871-.72048.41598-1.32274.95809-1.79496 1.58235.22597-3.67754 2.42826-6.82061 5.55802-8.38037z" fill="url(#g)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

const MonocolorIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => {
  return (
    <div className={`flex items-center justify-center` + className} style={{ filter: "grayscale(1)" }}>
      <svg width={size + `px`} height={size + `px`} viewBox="0 0 24.000001 24.000001" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <filter id="a" colorInterpolationFilters="sRGB" height="1.336" width="1.336" x="-.168" y="-.168">
          <feGaussianBlur stdDeviation="1.5400003" />
        </filter>
        <linearGradient id="b" gradientTransform="matrix(1.0283134 0 0 .98361153 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="17.871185" x2="17.871185" y1="7.668531" y2="17.89324">
          <stop offset="0" stopColor="#1e1e1e" />
          <stop offset="1" stopColor="#9e9e9e" />
        </linearGradient>
        <linearGradient id="c" gradientTransform="matrix(.94465199 0 0 1.0707233 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="23.954397" x2="23.954397" y1="8.60988" y2="19.256279">
          <stop offset="0" stopColor="#1e1e1e" />
          <stop offset="1" stopColor="#9e9e9e" />
        </linearGradient>
        <linearGradient id="d" gradientTransform="matrix(1.1037078 0 0 .91642091 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="20.12693" x2="20.12693" y1="19.205147" y2="29.033293">
          <stop offset="0" stopColor="#1e1e1e" />
          <stop offset="1" stopColor="#9e9e9e" />
        </linearGradient>
        <linearGradient id="e" gradientTransform="matrix(1.0283134 0 0 .98361158 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="16.359619" x2="16.359619" y1="17.89324" y2="28.117949">
          <stop offset="0" stopColor="#1e1e1e" />
          <stop offset="1" stopColor="#9e9e9e" />
        </linearGradient>
        <linearGradient id="f" gradientTransform="matrix(.94465199 0 0 1.0707233 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="13.307998" x2="13.307998" y1="13.618688" y2="24.265087">
          <stop offset="0" stopColor="#1e1e1e" />
          <stop offset="1" stopColor="#9e9e9e" />
        </linearGradient>
        <linearGradient id="g" gradientTransform="matrix(1.1037078 0 0 .91642092 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="11.765563" x2="11.765563" y1="9.376999" y2="19.205147">
          <stop offset="0" stopColor="#1e1e1e" />
          <stop offset="1" stopColor="#9e9e9e" />
        </linearGradient>
        <g fillRule="evenodd">
          <g filter="url(#a)" opacity=".2" transform="matrix(.81818153 0 0 .81818153 -283.30046 -654.25924)">
            <circle cx="360.92291" cy="814.31714" r="10.999999" />
            <path d="m367.00513 805.15019c.33342.78907.51778 1.65647.51778 2.56694 0 3.64508-2.95492 6.6-6.6 6.6 1.82253-3.15674.74096-7.19323-2.41577-9.01576-.78918-.45563-1.63334-.72977-2.48415-.83534 1.47548-.73531 3.13939-1.1489 4.89992-1.1489 2.24884 0 4.34007.67484 6.08222 1.83306z" />
            <path d="m371.90192 815.0022c-.51649.68278-1.17521 1.27572-1.96325 1.7307-3.15672 1.82254-7.19323.74097-9.01576-2.41577 3.64508 0 6.6-2.95492 6.6-6.6 0-.91047-.18436-1.77787-.51778-2.56694 2.96417 1.97065 4.91778 5.34066 4.91778 9.16694 0 .23008-.007.4585-.021.68507z" />
            <path d="m365.82282 824.16823c-.8508-.1056-1.69496-.3797-2.48415-.83534-3.15672-1.82253-4.2383-5.85902-2.41576-9.01576 1.82253 3.15674 5.85904 4.23831 9.01576 2.41577.78804-.45498 1.44676-1.04792 1.96325-1.7307-.24716 4.02231-2.65592 7.46006-6.0791 9.16603z" />
            <path d="m354.84069 823.48407c-.33342-.78907-.51778-1.65647-.51778-2.56694 0-3.64508 2.95492-6.6 6.6-6.6-1.82254 3.15674-.74096 7.19323 2.41576 9.01576.78919.45564 1.63335.72977 2.48415.83534-1.47547.73531-3.13938 1.1489-4.89991 1.1489-2.24884 0-4.34007-.67484-6.08222-1.83306z" />
            <path d="m349.9439 813.63206c.51649-.68278 1.1752-1.27572 1.96324-1.73069 3.15673-1.82255 7.19323-.74098 9.01577 2.41576-3.64508 0-6.6 2.95492-6.6 6.6 0 .91047.18436 1.77787.51778 2.56694-2.96417-1.97065-4.91778-5.34066-4.91778-9.16694 0-.23008.007-.4585.021-.68507z" />
            <path d="m356.02299 804.46603c.85081.1056 1.69497.37971 2.48415.83534 3.15673 1.82253 4.2383 5.85902 2.41577 9.01576-1.82254-3.15674-5.85904-4.23831-9.01577-2.41576-.78804.45497-1.44675 1.04791-1.96324 1.73069.24716-4.02231 2.65591-7.46005 6.07909-9.16603z" />
          </g>
          <g transform="matrix(.81818153 0 0 .81818153 -283.30046 -654.25924)">
            <circle cx="360.92291" cy="814.31714" r="10.999999" />
            <path d="m367.00513 805.15019c.33342.78907.51778 1.65647.51778 2.56694 0 3.64508-2.95492 6.6-6.6 6.6 1.82253-3.15674.74096-7.19323-2.41577-9.01576-.78918-.45563-1.63334-.72977-2.48415-.83534 1.47548-.73531 3.13939-1.1489 4.89992-1.1489 2.24884 0 4.34007.67484 6.08222 1.83306z" />
            <path d="m371.90192 815.0022c-.51649.68278-1.17521 1.27572-1.96325 1.7307-3.15672 1.82254-7.19323.74097-9.01576-2.41577 3.64508 0 6.6-2.95492 6.6-6.6 0-.91047-.18436-1.77787-.51778-2.56694 2.96417 1.97065 4.91778 5.34066 4.91778 9.16694 0 .23008-.007.4585-.021.68507z" />
            <path d="m365.82282 824.16823c-.8508-.1056-1.69496-.3797-2.48415-.83534-3.15672-1.82253-4.2383-5.85902-2.41576-9.01576 1.82253 3.15674 5.85904 4.23831 9.01576 2.41577.78804-.45498 1.44676-1.04792 1.96325-1.7307-.24716 4.02231-2.65592 7.46006-6.0791 9.16603z" />
            <path d="m354.84069 823.48407c-.33342-.78907-.51778-1.65647-.51778-2.56694 0-3.64508 2.95492-6.6 6.6-6.6-1.82254 3.15674-.74096 7.19323 2.41576 9.01576.78919.45564 1.63335.72977 2.48415.83534-1.47547.73531-3.13938 1.1489-4.89991 1.1489-2.24884 0-4.34007-.67484-6.08222-1.83306z" />
            <path d="m349.9439 813.63206c.51649-.68278 1.1752-1.27572 1.96324-1.73069 3.15673-1.82255 7.19323-.74098 9.01577 2.41576-3.64508 0-6.6 2.95492-6.6 6.6 0 .91047.18436 1.77787.51778 2.56694-2.96417-1.97065-4.91778-5.34066-4.91778-9.16694 0-.23008.007-.4585.021-.68507z" />
            <path d="m356.02299 804.46603c.85081.1056 1.69497.37971 2.48415.83534 3.15673 1.82253 4.2383 5.85902 2.41577 9.01576-1.82254-3.15674-5.85904-4.23831-9.01577-2.41576-.78804.45497-1.44675 1.04791-1.96324 1.73069.24716-4.02231 2.65591-7.46005 6.07909-9.16603z" />
          </g>
          <g transform="matrix(1.5588457 .9 -.9 1.5588457 3.917459 -25.365251)">
            <circle cx="14.267952" cy="15.732222" fill="#1e1e1e" r="4.25" strokeWidth=".422585" />
            <g transform="matrix(.42258514 0 0 .42258514 7.474854 8.157344)">
              <path d="m21.63598 9.54387c.30484.72142.4734 1.51448.4734 2.34692 0 3.33263-2.70163 6.03428-6.03428 6.03428 1.66632-2.88616.67745-6.57667-2.2087-8.243-.72154-.41657-1.49334-.6672-2.27123-.76373 1.34901-.67228 2.87031-1.05042 4.47993-1.05042 2.05608 0 3.96806.617 5.56088 1.67595z" fill="url(#b)" />
              <path d="m26.11305 18.55142c-.47222.62426-1.07448 1.16637-1.79497 1.58235-2.88615 1.66632-6.57666.67745-8.24298-2.2087 3.33265 0 6.03428-2.70165 6.03428-6.03428 0-.83244-.16856-1.6255-.4734-2.34692 2.7101 1.80173 4.49626 4.88288 4.49626 8.3812 0 .21035-.007.41919-.0191.62635z" fill="url(#c)" />
              <path d="m20.55501 26.93179c-.77787-.0965-1.54968-.34716-2.27121-.76374-2.88616-1.66632-3.87503-5.35683-2.2087-8.24298 1.66632 2.88615 5.35683 3.87502 8.24298 2.2087.72049-.41598 1.32275-.95809 1.79497-1.58235-.22598 3.67754-2.42826 6.82061-5.55804 8.38037z" fill="url(#d)" />
              <path d="m10.51421 26.30626c-.30484-.72142-.47339-1.51448-.47339-2.34691 0-3.33264 2.70163-6.03428 6.03428-6.03428-1.66633 2.88615-.67746 6.57666 2.2087 8.24298.72153.41658 1.49334.66721 2.27121.76374-1.34899.67228-2.87029 1.05042-4.47991 1.05042-2.05609 0-3.96806-.617-5.56089-1.67595z" fill="url(#e)" />
              <path d="m6.03715 17.29871c.47222-.62426 1.07448-1.16637 1.79496-1.58235 2.88615-1.66632 6.57666-.67745 8.24299 2.20871-3.33265 0-6.03428 2.70164-6.03428 6.03428 0 .83243.16855 1.62549.47339 2.34691-2.7101-1.80173-4.49626-4.88288-4.49626-8.38119 0-.21036.007-.4192.0191-.62636z" fill="url(#f)" />
              <path d="m11.59517 8.91834c.77789.0966 1.54969.34716 2.27123.76373 2.88615 1.66633 3.87502 5.35684 2.2087 8.243-1.66633-2.88616-5.35684-3.87503-8.24299-2.20871-.72048.41598-1.32274.95809-1.79496 1.58235.22597-3.67754 2.42826-6.82061 5.55802-8.38037z" fill="url(#g)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
// const MonocolorIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => {
//   return (
//     <div className={`flex items-center justify-center` + className}>
//       <svg width={size + `px`} height={size + `px`} viewBox="0 0 24.000001 24.000001" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">

//       <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

//       <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

//       <g id="SVGRepo_iconCarrier"> <filter id="a" colorInterpolationFilters="sRGB" height="1.336" width="1.336" x="-.168" y="-.168"> <feGaussianBlur stdDeviation="1.5400003"/> </filter> <linearGradient id="b" gradientTransform="matrix(1.0283134 0 0 .98361153 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="17.871185" x2="17.871185" y1="7.668531" y2="17.89324"> <stop offset="0" stopColor="#1e1e1e"/> <stop offset="1" stopColor="#9e9e9e"/> </linearGradient> <linearGradient id="c" gradientTransform="matrix(.94465199 0 0 1.0707233 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="23.954397" x2="23.954397" y1="8.60988" y2="19.256279"> <stop offset="0" stopColor="#1e1e1e"/> <stop offset="1" stopColor="#9e9e9e"/> </linearGradient> <linearGradient id="d" gradientTransform="matrix(1.1037078 0 0 .91642091 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="20.12693" x2="20.12693" y1="19.205147" y2="29.033293"> <stop offset="0" stopColor="#1e1e1e"/> <stop offset="1" stopColor="#9e9e9e"/> </linearGradient> <linearGradient id="e" gradientTransform="matrix(1.0283134 0 0 .98361158 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="16.359619" x2="16.359619" y1="17.89324" y2="28.117949"> <stop offset="0" stopColor="#1e1e1e"/> <stop offset="1" stopColor="#9e9e9e"/> </linearGradient> <linearGradient id="f" gradientTransform="matrix(.94465199 0 0 1.0707233 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="13.307998" x2="13.307998" y1="13.618688" y2="24.265087"> <stop offset="0" stopColor="#1e1e1e"/> <stop offset="1" stopColor="#9e9e9e"/> </linearGradient> <linearGradient id="g" gradientTransform="matrix(1.1037078 0 0 .91642092 -1.5249 .32507)" gradientUnits="userSpaceOnUse" x1="11.765563" x2="11.765563" y1="9.376999" y2="19.205147"> <stop offset="0" stopColor="#1e1e1e"/> <stop offset="1" stopColor="#9e9e9e"/> </linearGradient> <g fillRule="evenodd"> <g filter="url(#a)" opacity=".2" transform="matrix(.81818153 0 0 .81818153 -283.30046 -654.25924)"> <circle cx="360.92291" cy="814.31714" r="10.999999"/> <path d="m367.00513 805.15019c.33342.78907.51778 1.65647.51778 2.56694 0 3.64508-2.95492 6.6-6.6 6.6 1.82253-3.15674.74096-7.19323-2.41577-9.01576-.78918-.45563-1.63334-.72977-2.48415-.83534 1.47548-.73531 3.13939-1.1489 4.89992-1.1489 2.24884 0 4.34007.67484 6.08222 1.83306z"/> <path d="m371.90192 815.0022c-.51649.68278-1.17521 1.27572-1.96325 1.7307-3.15672 1.82254-7.19323.74097-9.01576-2.41577 3.64508 0 6.6-2.95492 6.6-6.6 0-.91047-.18436-1.77787-.51778-2.56694 2.96417 1.97065 4.91778 5.34066 4.91778 9.16694 0 .23008-.007.4585-.021.68507z"/> <path d="m365.82282 824.16823c-.8508-.1056-1.69496-.3797-2.48415-.83534-3.15672-1.82253-4.2383-5.85902-2.41576-9.01576 1.82253 3.15674 5.85904 4.23831 9.01576 2.41577.78804-.45498 1.44676-1.04792 1.96325-1.7307-.24716 4.02231-2.65592 7.46006-6.0791 9.16603z"/> <path d="m354.84069 823.48407c-.33342-.78907-.51778-1.65647-.51778-2.56694 0-3.64508 2.95492-6.6 6.6-6.6-1.82254 3.15674-.74096 7.19323 2.41576 9.01576.78919.45564 1.63335.72977 2.48415.83534-1.47547.73531-3.13938 1.1489-4.89991 1.1489-2.24884 0-4.34007-.67484-6.08222-1.83306z"/> <path d="m349.9439 813.63206c.51649-.68278 1.1752-1.27572 1.96324-1.73069 3.15673-1.82255 7.19323-.74098 9.01577 2.41576-3.64508 0-6.6 2.95492-6.6 6.6 0 .91047.18436 1.77787.51778 2.56694-2.96417-1.97065-4.91778-5.34066-4.91778-9.16694 0-.23008.007-.4585.021-.68507z"/> <path d="m356.02299 804.46603c.85081.1056 1.69497.37971 2.48415.83534 3.15673 1.82253 4.2383 5.85902 2.41577 9.01576-1.82254-3.15674-5.85904-4.23831-9.01577-2.41576-.78804.45497-1.44675 1.04791-1.96324 1.73069.24716-4.02231 2.65591-7.46005 6.07909-9.16603z"/> </g> <g transform="matrix(.81818153 0 0 .81818153 -283.30046 -654.25924)"> <circle cx="360.92291" cy="814.31714" r="10.999999"/> <path d="m367.00513 805.15019c.33342.78907.51778 1.65647.51778 2.56694 0 3.64508-2.95492 6.6-6.6 6.6 1.82253-3.15674.74096-7.19323-2.41577-9.01576-.78918-.45563-1.63334-.72977-2.48415-.83534 1.47548-.73531 3.13939-1.1489 4.89992-1.1489 2.24884 0 4.34007.67484 6.08222 1.83306z"/> <path d="m371.90192 815.0022c-.51649.68278-1.17521 1.27572-1.96325 1.7307-3.15672 1.82254-7.19323.74097-9.01576-2.41577 3.64508 0 6.6-2.95492 6.6-6.6 0-.91047-.18436-1.77787-.51778-2.56694 2.96417 1.97065 4.91778 5.34066 4.91778 9.16694 0 .23008-.007.4585-.021.68507z"/> <path d="m365.82282 824.16823c-.8508-.1056-1.69496-.3797-2.48415-.83534-3.15672-1.82253-4.2383-5.85902-2.41576-9.01576 1.82253 3.15674 5.85904 4.23831 9.01576 2.41577.78804-.45498 1.44676-1.04792 1.96325-1.7307-.24716 4.02231-2.65592 7.46006-6.0791 9.16603z"/> <path d="m354.84069 823.48407c-.33342-.78907-.51778-1.65647-.51778-2.56694 0-3.64508 2.95492-6.6 6.6-6.6-1.82254 3.15674-.74096 7.19323 2.41576 9.01576.78919.45564 1.63335.72977 2.48415.83534-1.47547.73531-3.13938 1.1489-4.89991 1.1489-2.24884 0-4.34007-.67484-6.08222-1.83306z"/> <path d="m349.9439 813.63206c.51649-.68278 1.1752-1.27572 1.96324-1.73069 3.15673-1.82255 7.19323-.74098 9.01577 2.41576-3.64508 0-6.6 2.95492-6.6 6.6 0 .91047.18436 1.77787.51778 2.56694-2.96417-1.97065-4.91778-5.34066-4.91778-9.16694 0-.23008.007-.4585.021-.68507z"/> <path d="m356.02299 804.46603c.85081.1056 1.69497.37971 2.48415.83534 3.15673 1.82253 4.2383 5.85902 2.41577 9.01576-1.82254-3.15674-5.85904-4.23831-9.01577-2.41576-.78804.45497-1.44675 1.04791-1.96324 1.73069.24716-4.02231 2.65591-7.46005 6.07909-9.16603z"/> </g> <g transform="matrix(1.5588457 .9 -.9 1.5588457 3.917459 -25.365251)"> <circle cx="14.267952" cy="15.732222" fill="#959595" r="4.25" strokeWidth=".422585"/> <g transform="matrix(.42258514 0 0 .42258514 7.474854 8.157344)"> <path d="m21.63598 9.54387c.30484.72142.4734 1.51448.4734 2.34692 0 3.33263-2.70163 6.03428-6.03428 6.03428 1.66632-2.88616.67745-6.57667-2.2087-8.243-.72154-.41657-1.49334-.6672-2.27123-.76373 1.34901-.67228 2.87031-1.05042 4.47993-1.05042 2.05608 0 3.96806.617 5.56088 1.67595z" fill="url(#b)"/> <path d="m26.11305 18.55142c-.47222.62426-1.07448 1.16637-1.79497 1.58235-2.88615 1.66632-6.57666.67745-8.24298-2.2087 3.33265 0 6.03428-2.70165 6.03428-6.03428 0-.83244-.16856-1.6255-.4734-2.34692 2.7101 1.80173 4.49626 4.88288 4.49626 8.3812 0 .21035-.007.41919-.0191.62635z" fill="url(#c)"/> <path d="m20.55501 26.93179c-.77787-.0965-1.54968-.34716-2.27121-.76374-2.88616-1.66632-3.87503-5.35683-2.2087-8.24298 1.66632 2.88615 5.35683 3.87502 8.24298 2.2087.72049-.41598 1.32275-.95809 1.79497-1.58235-.22598 3.67754-2.42826 6.82061-5.55804 8.38037z" fill="url(#d)"/> <path d="m10.51421 26.30626c-.30484-.72142-.47339-1.51448-.47339-2.34691 0-3.33264 2.70163-6.03428 6.03428-6.03428-1.66633 2.88615-.67746 6.57666 2.2087 8.24298.72153.41658 1.49334.66721 2.27121.76374-1.34899.67228-2.87029 1.05042-4.47991 1.05042-2.05609 0-3.96806-.617-5.56089-1.67595z" fill="url(#e)"/> <path d="m6.03715 17.29871c.47222-.62426 1.07448-1.16637 1.79496-1.58235 2.88615-1.66632 6.57666-.67745 8.24299 2.20871-3.33265 0-6.03428 2.70164-6.03428 6.03428 0 .83243.16855 1.62549.47339 2.34691-2.7101-1.80173-4.49626-4.88288-4.49626-8.38119 0-.21036.007-.4192.0191-.62636z" fill="url(#f)"/> <path d="m11.59517 8.91834c.77789.0966 1.54969.34716 2.27123.76373 2.88615 1.66633 3.87502 5.35684 2.2087 8.243-1.66633-2.88616-5.35684-3.87503-8.24299-2.20871-.72048.41598-1.32274.95809-1.79496 1.58235.22597-3.67754 2.42826-6.82061 5.55802-8.38037z" fill="url(#g)"/> </g> </g> </g> </g>

//       </svg>
//     </div>
//   )
// }

function CaretUpDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="m2.5 8.5 4 4 7-9" />
    </svg>
  );
}

function CaretUpIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M12 10H4l4-4.5z" />
    </svg>
  );
}

function CaretDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M12 6H4l4 4.5z" />
    </svg>
  );
}