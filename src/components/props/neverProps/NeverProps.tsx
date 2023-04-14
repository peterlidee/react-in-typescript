import NeverType from './NeverType'

function NeverProps() {
  return (
    <div>
      <h3>Never props</h3>
      <NeverType number={-10} isNegative />
      <NeverType number={10} isPositive />
      <NeverType number={0} isZero />
    </div>
  )
}

export default NeverProps