## Loan Lifecycle

AS a business owner, I want to apply for a loan
WHEN I apply THEN I provide my user_id, desired loan amount, purpose.
WHEN the loan application is created, THEN it generates status, requested_at 


As a loan reviewer, I want to review a loan
WHEN I view a loan THEN reviewed_at creates timestamp and status becomes 'under_review'.
WHEN I add notes, it records notes to application.


- Only users can create loans 
- Only reviewers I can add notes, update status, and set an approved amount


* Method: POST (creating new data)
* URL: /api/loans
* Who: Authenticated users only
* Data needed: amount, purpose  