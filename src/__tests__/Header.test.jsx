import React from "react"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import {afterEach, expect, it } from "vitest"
import Header from "../components/Header"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom/vitest";

afterEach(cleanup)

it("shoud need to check the header component",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>        
        </BrowserRouter>
    )

    // let button = screen.getByRole("button")
    // console.log("hi")
    // console.log(button.length)


})

it("shoud need to check the header component has the cart items 0",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>        
        </BrowserRouter>
    )

    // const cart = screen.getByText("Cart-(0 Items)")
    const cart = screen.getByText(/Cart/)
    // console.log(cart)
    console.log("hi")
    expect(cart).toBeInTheDocument()


})

it("should check login logout button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>        
        </BrowserRouter>
    )

    let loginBtn=screen.getByRole("button",{name:"Default User"})

    expect(loginBtn).toBeInTheDocument()

    fireEvent.click(loginBtn);

    let logoutBtn=screen.getByRole("button",{name:"Login"})
    expect(logoutBtn).toBeInTheDocument()

})