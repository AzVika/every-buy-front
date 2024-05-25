"use client";

import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  display: flex;
  gap: 161px;
  padding: 12px 61px 12px 60px;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: #f5ffb6;
`;

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EmailContainer = styled.div`
  display: flex;
`;

export const EmailInput = styled.input`
  padding: 10px 152px 10px 10px;
  border-radius: 10px;
  border: 1px solid var(--not-active, #f5ffb6);
  background: var(--background, #fff);
`;

export const EmailButton = styled.button`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  border-radius: 10px;
  background: var(--not-active, #f5ffb6);
  margin-left: -15px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MarketPlace = styled.div`
  display: flex;
  padding: 10px 607px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--not-active, #f5ffb6);
`;
