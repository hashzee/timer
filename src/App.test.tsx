import React from "react"
import { shallow, mount } from "enzyme"
import App from "./App"
import TimerHand from "./Components/TimerHand/TimerHand"
import Bottom from "./Components/Bottom/Bottom"
import TimerDigitsDisplay from "./Components/TimerDigitsDisplay/TimerDigitsDisplay"

describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<App />)))

  it("should render a <div className='App' />", () => {
    expect(container.find(".App").length).toEqual(1)
  })

  it("should render Timer", () => {
    expect(container.find(".Timer").length).toEqual(1)
  }) 

  it('should have a select element to select seconds', () => {
    expect(container.find('select').length).toEqual(1);
  });

  it("should render the TimerHand Component", () => {
    expect(container.containsMatchingElement(<TimerHand />)).toEqual(true)
  })

  it("should render the Timer Digits Display", () => {
    expect(container.containsMatchingElement(<TimerDigitsDisplay />)).toEqual(true)
  })  

  it("should render the Bottom (Navigation) Component", () => {
    expect(container.containsMatchingElement(<Bottom />)).toEqual(true)
  })
  
});

