import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGird() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'monospace',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#ffff',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
