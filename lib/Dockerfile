FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/KING-HANSA/DEW-XMD /root/DEW

WORKDIR /root/DEW/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
