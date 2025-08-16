import "@testing-library/jest-dom"
import Body from "../components/Body"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, expect, it, vi } from "vitest"
import React, { act } from "react"
import mockFetchData from "../components/mocks/mockDataFetch.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom/vitest"

globalThis.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve({ recipes: mockFetchData })
  });
});

afterEach(cleanup)


it("should render the body component with search button", async () => {
  await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));


  const btn =await screen.findByRole("button",{name:/search/i});
  const search=screen.getByTestId("searchBar");
  
  fireEvent.change(search,{target:{value:"classic"}})
  fireEvent.click(btn);

  let cards=screen.getAllByTestId("resCard");
   console.log(cards)
  expect(cards.length).toBe(1)

//   expect(btn).toBeInTheDocument();
});

it("should check the length of top restaurants",async()=>{
    await act(async()=>render(
        <BrowserRouter>
           <Body />
        </BrowserRouter>
    ))
//  data-testid="resCard"
    let topBtn=screen.getByText("Top Rated Restaurant")
    fireEvent.click(topBtn)
    let cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(22)

})