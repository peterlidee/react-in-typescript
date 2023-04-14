type StatusType = 'loading' | 'loaded';
type Props = {
  status: StatusType
}

function StringLiterals({ status }: Props) {
  return (
    <div>
      <strong>String literal</strong>:
      {status === 'loading' && ' loading'}
      {status === 'loaded' && ' loaded'}
    </div>
  )
}

export default StringLiterals