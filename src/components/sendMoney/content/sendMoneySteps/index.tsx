import React from "react";

const steps = [
  {No: 1, title: "Sign up for free", description: "Sign in to your Xe account or sign up for free. It takes just a few minutes, all you need is an email address"},
  {No: 2, title: "Get a quote", description: "Let us know the currency you'd like to transfer, how much money you want to send and the destination."},
  {No: 3, title: "Add your recipient", description: "Provide your recipient's payment information (you'll need details like their name and address)."},
  {No: 4, title: "Verify your identity", description: "For some transfers, we may need identifying documents to confirm it’s really you and keep your money safe."},
  {No: 5, title: "Confirm your quote", description: "Confirm and fund your transfer with a bank account, credit card, or debit card and you're done!"},
  {No: 6, title: "Track your transfer", description: "See where your money is and when it arrives to your recipient. Get live chat, phone and email support."}
]

export default function SendMoneySteps() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-40">
      <h3 className="font-bold text-blue-500 t30a39">6 easy steps</h3>

      <div className="font-bold t56a72 text-center">
        How to send money online with Xe
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, id) => (
          <div key={id} className="flex flex-col gap-4 w-[350px] h-[388px] rounded-3xl bg-white px-6 py-20">
            <span className="text-blue-500 t64a76 font-bold">{step.No}</span>
            <span className="font-bold t28a36">{step.title}</span>
            <span className="t15a22">{step.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
