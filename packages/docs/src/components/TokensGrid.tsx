interface TokensGridProps {
  tokens: Record<string, string>
}

export function TokensGrid({ tokens }: TokensGridProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([name, value]) => {
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
