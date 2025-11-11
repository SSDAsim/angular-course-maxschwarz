export interface InvestmentInput {
    initialInvestment: number,
    expectedReturn: number,
    annualInvestment: number,
    duration: number,
}

// Alternatively 
// type InvestmentInput = {
//     initialInvestment: number,
//     expectedReturn: number,
//     annualInvestment: number,
//     duration: number,
// }