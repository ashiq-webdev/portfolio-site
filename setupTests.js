import '@testing-library/jest-dom'

// jsdom does not implement IntersectionObserver
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}

globalThis.IntersectionObserver = MockIntersectionObserver;