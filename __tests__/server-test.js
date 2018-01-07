const expect = require("chai").expect,
  request = require("supertest"),
  exec = require("mz/child_process").exec,
  app = require("../server/app")

describe("builds application", () => {
  it("builds to 'build' directory", done => {
    // Disable mocha time-out
    done()
    // Run process
    return exec("npm run build")
  })
})

describe("express serving", () => {
  it("responds to '/' with the index.html", () => {
    return request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200)
      .then(res => expect(res.text).to.contain(`<div id="root"></div>`))
  })

  it("responds to 'idea.png' with an image", () => {
    return request(app)
      .get("/public/images/idea.png")
      .expect("Content-Type", "image/png")
      .expect(200)
  })

  it("responds to '/foo/bar' with the index.html", () => {
    return request(app)
      .get("/foo/bar")
      .expect("Content-Type", /html/)
      .expect(200)
      .then(res => expect(res.text).to.contain(`<div id="root"></div>`))
  })
})
