import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemvalue?: boolean
}

export function TokensGrid({ tokens, hasRemvalue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemvalue && <td>Pixels</td>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([name, value]) => {
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
              {hasRemvalue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
