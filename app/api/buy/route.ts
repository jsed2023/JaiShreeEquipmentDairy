"use server";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, quantity, mobileNumber, productName } = await request.json();

    // Validation
    if (!name || !quantity || !mobileNumber || !productName) {
      return NextResponse.json(
        {
          status: 400,
          message: "Missing values",
        },
        { status: 400 }
      );
    }

    const message = `🛒 New Inquiry  
Name: ${name}  
Mobile: ${mobileNumber}  
Product: ${productName}  
Quantity: ${quantity}`;

    // URL encode message
    const encodedMessage = encodeURIComponent(message);

    // Your WhatsApp number link
    const whatsappUrl = `https://wa.me/918112294173?text=${encodedMessage}`;

    return NextResponse.json(
      {
        status: 200,
        whatsappUrl,
        message: "WhatsApp link generated",
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        message: error,
      },
      { status: 500 }
    );
  }
}
