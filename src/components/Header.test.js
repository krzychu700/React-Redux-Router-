import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Header tests", () => {
  it("Header ok", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Header changes text according to state", () => {
    const wrapper = shallow(<Header />);
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toBe("Books");
    wrapper.setState({
      bookstoreName: "Red Books"
    });
    expect(wrapper.find("h1").text()).toBe("Red Books");
  });

  it("Header state changes after clicking on header div", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state().bookstoreName).toBe("Books");
    wrapper.find(".header").simulate("click");
    expect(wrapper.state().bookstoreName).toBe("Red Books");
  });

  it("Snapshot matches", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
