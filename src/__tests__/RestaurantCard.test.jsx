import React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import {afterEach, expect, it } from "vitest"
import RestaurantCard, { withPromotedLabel } from "../components/RestaurantCard"
import "@testing-library/jest-dom/vitest"
import resData from "../components/mocks/restCardMock.json"
import labelData from "../components/mocks/withLabelMock.json"

afterEach(cleanup)

it("To check the restaurant Card",()=>{
    render(
        <RestaurantCard resName={resData.name} img={resData.image} cuisine={resData.cuisine} rating={resData.rating}/>
    )

    let name=screen.getByText("Mexican Street Corn (Elote)");
    expect(name).toBeInTheDocument()
})

it("should check the restaurant compoennt with the label",()=>{
    
    let RestaurantCardPromotes=withPromotedLabel(RestaurantCard);

    render(
        <RestaurantCardPromotes  resName={labelData.name} img={labelData.image} cuisine={labelData.cuisine} rating={labelData.rating}/>
    )

    let cardData=screen.getByText("Classic Margherita Pizza")
    expect(cardData).toBeInTheDocument()
})