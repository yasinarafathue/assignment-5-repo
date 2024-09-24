// document.getElementById('donate-btn1').addEventListener('click', function() {
//     const donationAmountInput = document.getElementById('donation-amount1');
//     const totalPriceElement = document.getElementById('totalPrice');
//     const currentDonationElement = document.querySelector('.w-28 h-11.flex.border-stone-100.bg-slate-100.rounded-lg .text-[#111111]');

//     // বর্তমান দানের পরিমাণ
//     let currentTotalPrice = parseFloat(totalPriceElement.textContent) || 0;
//     let currentDonation = parseFloat(currentDonationElement.textContent) || 0;

//     // ইনপুট থেকে প্রদানের পরিমাণ গ্রহণ করা
//     const donationAmount = parseFloat(donationAmountInput.value);

//     // প্রদানের পরিমাণ বৈধ কিনা
//     if (!isNaN(donationAmount) && donationAmount > 0) {
//         // বর্তমান মোট থেকে বাদ দেওয়া
//         currentTotalPrice -= donationAmount;
//         // নতুন দানের পরিমাণ যোগ করা
//         currentDonation += donationAmount;

//         // আপডেট করা
//         totalPriceElement.textContent = currentTotalPrice.toFixed(2);
//         currentDonationElement.textContent = `${currentDonation.toFixed(2)} BDT`;
        
//         // ইনপুট ফিল্ড ক্লিয়ার করা
//         donationAmountInput.value = '';
//     } else {
//         alert('দয়া করে একটি বৈধ দান পরিমাণ লিখুন');
//     }
// });
