# Playwright Fundamentals

This repository contains a hands-on collection of Playwright automation exercises and learning modules covering browser automation fundamentals, locators, test annotations, session handling, reporting, and framework concepts.

## Project structure

- `tests/01_Basics` - basic Playwright concepts and browser interactions
- `tests/02_TestAnnotations` - test annotations and metadata usage
- `tests/03_Locator_Commands` - locator strategies and built-in commands
- `tests/04_Session_Storage` - session and storage state handling
- `tests/05_Allure_Reporting` - custom reporting with media attachments
- `tests/06_Multiple_Element_Filter` - multi-element filtering and form interactions
- `tests/07_WebTables` - table automation and row/cell handling
- `tests/08_Web_Select_Frames_Iframe` - frame and iframe interactions
- `tests/09_Frame_Iframe` - additional iframe-based scenarios
- `tests/10_Keyboard_Hover_Drag_Drop_Calender` - keyboard, hover, drag-and-drop, and calendar handling
- `tests/11_JS_Alerts` - JavaScript alert and prompt handling
- `tests/12_Handle_SVG` - SVG element interactions
- `tests/13_Shadow_DOM` - shadow DOM tests
- `tests/14_FileUpload` - file upload workflows
- `tests/15_File_Download` - file download handling
- `tests/16_Scroll_toElement` - scrolling and element visibility strategies
- `tests/17_Expect_Assertions` - assert patterns and validation
- `tests/18_Test_hooks` - before/after hooks and lifecycle usage
- `tests/19_Data_Driven_Testing` - parameterized and data-driven test patterns
- `tests/20_Page_Object_Model` - page object model design
- `tests/21_Fixture` - Playwright fixtures and reuse patterns
- `tests/22_Misc_AI_Concepts` - AI-related or advanced automation experiments
- `tests/23_Advance_PW_Framework` - advanced framework structure
- `utils/` - custom utilities and reporting helpers
- `playwright.config.ts` - Playwright configuration
- `.env.example` - sample environment file for credentials

## Prerequisites

- Node.js (LTS recommended)
- npm
- A browser supported by Playwright

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SandeepPrasad01/PlaywrightFundamentals.git
   cd PlaywrightFundamentals
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

4. Copy the sample environment file and update credentials if needed:
   ```bash
   copy .env.example .env
   ```

## Running tests

Run all tests:
```bash
npx playwright test
```

Run a specific file:
```bash
npx playwright test tests/01_Basics/example.spec.ts
```

Run with HTML report:
```bash
npx playwright test --reporter=html
```

Open the last HTML report:
```bash
npx playwright show-report
```

## Notes

This project is intended for learning and practice. Many test files are organized by topic as the Playwright concepts become more advanced.

## License

MIT
