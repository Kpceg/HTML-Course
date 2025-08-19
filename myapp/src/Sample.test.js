import Sample from "./Sample"
import {render,screen} from '@testing-library/react'
test("render name in sample componenet",()=>{
    render(<Sample name='maruthu'/>)
    const h=screen.getByText("Welcome maruthu")
    expect(h).toBeInTheDocument()
})