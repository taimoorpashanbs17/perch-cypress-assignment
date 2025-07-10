# 🧪 Perch Automation Suite

This project is a **Test Automation Framework** built using [Cypress](https://www.cypress.io/), written in **JavaScript**, and supports **BDD-style feature files**.

---

## 🚀 Tech Stack

- 🧠 **JavaScript** – Main scripting language
- 🧪 **Cypress** – End-to-end testing framework
- 🥒 **Cucumber** – BDD syntax with `.feature` files


## Scenarios Automated
1. **Home Page**

    - Click on Sort By Button and Verify Products displays prices in ascending order.
    - Search with Product present on Home Page and verify it displays the result
    - Search with Product which is not displaying on Home Page and verify that alert message displays

2. **Profile Page**
    - Click on 'Profile' Button and verify that user navigates to Profile Page
    - Click on 'Back to Home' Button and verify that user navigates to Home Page
    - Update user username and email and verify that changes are saved

3. **Cart Page**
    - Add one product and verify that product is displaying on "cart"
    - Add one product, remove it and verify that product is removed from cart


## 🛠 Installation

1. **Clone the repository**
```bash
git clone https://github.com/taimoorpashanbs17/perch-cypress-assignment.git
cd perch-cypress-assignment
```

2. **Install dependencies**
```bash
npm install
```

3. **Running Tests**
```bash
npm run test:alltest
```

Wants to run separate test cases for separate Pages:
```bash
#  Home Page
npm run test:home

# Profile Page
npm test:profile

# Cart Page
npm run test:cart
```

## Future Plans
- Integrate test reporting tools (e.g., Allure or Mochawesome)
- Add more test scenarios for broader coverage
- Set up and configure parallel test execution

