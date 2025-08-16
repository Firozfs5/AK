import { cleanup, render } from "@testing-library/react";
// import { act } from "react";
import { afterEach, it } from "vitest";
import RestaurantMenue from "../components/RestaurantMenue";
import "@testing-library/jest-dom/vitest"
 import React from "react";



afterEach(cleanup)

it("should load restaurant menue component",async()=>{
    render(<RestaurantMenue />)

    // let accordianItem=screen.getByText(/Italian Cuisine/);

})