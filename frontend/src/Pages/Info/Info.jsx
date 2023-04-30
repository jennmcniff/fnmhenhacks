import ReactMarkdown from "react-markdown";
import './Info.css'

const markdown = `
# Financial Terms

### - Assets
An asset is an owned belonging that can provide future
economic benefit. These goods are durable and can be translated into a
dollar amount ('liquidated'). Common examples include a house, car, or
precious metals. 

### - Cash-checking
Cash-checking services describe when
a bank can cash an individual's check, regardless of whether they have a
bank account.


### - Credit score
An individual's credit score is a measure of their perceived
trustworthiness to repay an issued loan on time. Ranging from 300 to 850 and
categorized as 'poor', 'fair', 'good', 'very good', and 'excellent', a good
credit score can help a borrower successfully take out a loan. The measure is
calculated by considering 6 factors: the potential borrower's currently unpaid
debt, the type of debt and how long it has existed, their credit card payment
history, the length of their credit history with each line of credit, the
percentage of their line of credit they've used, and new applications for
credit. 

### - Collateral
When taking out a loan, sometimes the lender will ask the borrower to pledge
an asset to increase security and confidence in the fact that the borrower will
repay the loan. In the event that the borrower defaults on their loan, the
borrower will forfeit the asset they pledged 'as collateral' to the lender as a
means of repayment.  

### - Default
A loan default occurs when the borrower fails to properly repay the debt as was
outlined in the initial loan agreement. The initial loan agreement will also
have outlined proceedings in the possible event of a default.

### - Installment loan
An installment loan is a type of loan that allows the borrower to repay their
loan in equally-sized monthly payments with a fixed interest rate. 

### - Interest rate
Interest is best understood as the cost of borrowing money, paid by the
borrower to the lender. The amount of interest owed continually increases as
the loan repayment remains incomplete. The interest rate is often given as a
percentage, describing the interest owed as a function of the principal amount
borrowed. Factors that can influence a loan's interest rate include the
borrower's credit score, the length of the loan term, and any pledged
collateral.

### - Liability
A liability is a debt that one entity owes another. In most cases, a
liability is expressed as a sum of money. 

### - Line of credit
A line of credit is a flexible loan issued from a bank or
financial institution. A line of credit is a set amount of money of which a
borrower has access. The borrower has the ability to repay the credit money
they spent immediately or over time. 

### - Liquidity
Liquidity describes the ability and ease of which it is to translate an entity
into cash (or 'liquidate'). Cash itself has the highest liquidity. Entities
like land or real estate are examples of low-liquidity assets because they can
take weeks, months, or even years to sell.

### - Loan
A loan is a sum of money issued and granted to the borrower at the discretion
of the lender. A contractual agreement is made between both parties,
establishing a loan term, interest rate, and typically a pledge of collateral.

### - Loan term
A loan term is the length of time that it will take the borrower to repay
their loan with the borrower making equal, regular payments. This duration of
time is established in the initial loan agreement.

### - Mortgage
A mortgage is a type of installment loan taken out specifically when an
individual is buying a property. The property itself is pledged as
collateral. These loans are typically paid off over the course of 15 or 30
years. 

### - Payday loan
A payday loan is a specific type of loan that tends to have a smaller principal
and higher interest rate. The premise surrounds the assumption that the
borrower will repay the loan upon receiving their next paycheck. 

### - Personal loan
Sometimes referred to as an 'unsecured loan,' a personal loan is a loan granted
to a borrower based on their creditworthiness (i.e. credit score) as opposed to
presented collateral. These loan funds are used to support

### - Principal
The dollar amount borrowed when the loan is initially taken out. 

### - Title loan
A car title loan is a secured loan wherein the borrower pledges their vehicle
title as collateral.
`;

const Info = () => {
  return (
    <div style={{ textAlign: "center" }} class="info">
      <div
        style={{
          textAlign: "left",
          margin: "0px auto auto auto",
          maxWidth: "50%",
          marginLeft: "0%",
          display: "inline-block",
        }}
      >
        <ReactMarkdown children={markdown}></ReactMarkdown>
      </div>
    </div>
  );
};

export default Info;
