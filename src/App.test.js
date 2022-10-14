import { render, screen } from "@testing-library/react"
import App from "./App"

describe('App render',  () => {
  it('should be proper',async () => {
    render(<App />)
    expect(screen.getByText('Tarun is great')).toBeInTheDocument()
  })
})