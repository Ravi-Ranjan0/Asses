'use client';
import React, { useEffect } from "react";
import mockup from "../public/Hero3.png";
import Gitlab from "../public/Gitlab.png";
import Slack from "../public/Slack.png";
import Paypal from "../public/Paypal.png";
import Netflix from "../public/Netflix.png";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../lib/firebase/firebase-config';
import { getMessaging } from "firebase/messaging/sw";
import { getToken } from "firebase/messaging";

const Hero = () => {
    useEffect(() => {
    if (typeof window !== 'undefined') {
      // Firebase will only initialize in the client-side
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);

      const getNotificationToken = async () => {
        try {
          const token = await getToken(messaging, {
            vapidKey: 'YOUR_PUBLIC_VAPID_KEY',
          });
          if (token) {
            console.log('Notification token:', token);
          } else {
            console.log('No registration token available.');
          }
        } catch (error) {
          console.error('Error getting notification token:', error);
        }
      };

      // Call getNotificationToken() when the component mounts
      getNotificationToken();
    }
  }, []);

  const handleSendNotification = () => {
    // Implement your logic to send the push notification
    alert("Push notification sent!");
  };
  return (
    <section
      style={{ backgroundColor: "#2B63D9" }}
      className="bg-white dark:bg-blue-900"
    >
      <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        {/* Image Section: Shown first on mobile */}
        <div className=" lg:mt-0 lg:col-span-5 flex justify-end order-1 lg:order-2">
          <img
            src={mockup.src}
            alt="mockup"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7 order-2 lg:order-1 px-4">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Your Supercharged Design Workflow.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-[#B1CCFB]">
            We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.
          </p>
          <button
            onClick={handleSendNotification}
            className="inline-flex w-full sm:w-fit items-center justify-center px-5 py-3 text-base font-medium text-white bg-[#437EF7] rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          >
            Send Notifications
          </button>

          {/* Supporting Text - Align to the left */}
          <p className="mt-6 text-[14px] font-medium leading-[20px] tracking-[-0.1px] text-white ml-4">
            Who supports us
          </p>

          {/* Logos Section */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-center mb-6">
            <img
              src={Gitlab.src}
              alt="Gitlab Logo"
              className="h-10 w-auto mx-auto"
            />
            <img
              src={Slack.src}
              alt="Slack Logo"
              className="h-10 w-auto mx-auto"
            />
            <img
              src={Netflix.src}
              alt="Netflix Logo"
              className="h-10 w-auto mx-auto"
            />
            <img
              src={Paypal.src}
              alt="Paypal Logo"
              className="h-10 w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
