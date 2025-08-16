import  { cleanup, render, screen } from "@testing-library/react"
import { afterEach, expect, it } from "vitest"
import Body from "../components/Body"
import React from "react"
import Shimmer from "../components/Shimmer"
import "@testing-library/jest-dom/vitest";


afterEach(cleanup)

it("should check the search button",()=>{
    render(<Body />)

    let button=screen.getByText("Loading...");
    expect(button).toBeInTheDocument()
})