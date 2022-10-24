import * as HIcons from '@heroicons/react/24/outline'

const DynamicHeroIcon = (props) => {
  const {...icons} = HIcons
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className={props.className} />
    </>
  )
}

export default DynamicHeroIcon