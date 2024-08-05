import cx from 'classnames'
import Checkbox from './Checkbox'
import { h } from 'preact'
import { Dispatch, StateUpdater, useState } from 'preact/hooks'
import { SvgIcon } from 'src/types'
import { INetworkMetadata, ITokenMetadata } from '@web3icons/core'

interface Props {
  className?: string
  iconName: string
  selectedIcons: SvgIcon[]
  svg: string
  setSelectedIcons: Dispatch<StateUpdater<SvgIcon[]>>
}

export default function IconCard({
  className,
  iconName,
  selectedIcons,
  svg,
  setSelectedIcons,
}: Props): h.JSX.Element {
  const [hover, setHover] = useState(false)
  const isSelected = selectedIcons.some((icon) => icon.name === iconName)

  const handleCheckboxChange = () => {
    setSelectedIcons((prevSelectedIcons) =>
      isSelected
        ? prevSelectedIcons.filter((icon) => icon.svg !== svg)
        : [...prevSelectedIcons, { name: iconName, svg }],
    )
  }

  return (
    <label
      className={cx(
        'relative flex flex-col items-center justify-center gap-1 border border-gray-lightest p-4 duration-150',
        className,
        isSelected ? 'bg-gray-light' : hover && 'bg-gray',
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="size-8" src={svg} />
      <span
        className={cx(
          'text-center text-sm text-white',
          isSelected ? 'text-opacity-100' : 'text-opacity-60',
        )}
      >
        {iconName.replace('Icon', '')}
      </span>
      <input
        type="checkbox"
        id={`checkbox-${iconName}`}
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      {(isSelected || hover) && (
        <Checkbox
          className="absolute left-1 top-1"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      )}
    </label>
  )
}
