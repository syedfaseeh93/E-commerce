package com.ecommerce.onlineshop.model.payment;

public class PaymentDetails {

    public PaymentDetails() {
    }

    public PaymentDetails(String paymentMethod, String status, String paymentid, String razorpayPaymentLinkId,
            String razorpayPaymentLinkReferenceId, String razorpayPaymentLinkStatus, String razorpayPaymentId) {
        this.paymentMethod = paymentMethod;
        this.status = status;
        this.paymentid = paymentid;
        this.razorpayPaymentLinkId = razorpayPaymentLinkId;
        this.razorpayPaymentLinkReferenceId = razorpayPaymentLinkReferenceId;
        this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
        this.razorpayPaymentId = razorpayPaymentId;
    }
    private String paymentMethod;
    private String status;
    private String paymentid;
    private String razorpayPaymentLinkId;
    private String razorpayPaymentLinkReferenceId;
    private String razorpayPaymentLinkStatus;
    private String razorpayPaymentId;
    public String getPaymentMethod() {
        return paymentMethod;
    }
    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getPaymentid() {
        return paymentid;
    }
    public void setPaymentid(String paymentid) {
        this.paymentid = paymentid;
    }
    public String getRazorpayPaymentLinkId() {
        return razorpayPaymentLinkId;
    }
    public void setRazorpayPaymentLinkId(String razorpayPaymentLinkId) {
        this.razorpayPaymentLinkId = razorpayPaymentLinkId;
    }
    public String getRazorpayPaymentLinkReferenceId() {
        return razorpayPaymentLinkReferenceId;
    }
    public void setRazorpayPaymentLinkReferenceId(String razorpayPaymentLinkReferenceId) {
        this.razorpayPaymentLinkReferenceId = razorpayPaymentLinkReferenceId;
    }
    public String getRazorpayPaymentLinkStatus() {
        return razorpayPaymentLinkStatus;
    }
    public void setRazorpayPaymentLinkStatus(String razorpayPaymentLinkStatus) {
        this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
    }
    public String getRazorpayPaymentId() {
        return razorpayPaymentId;
    }
    public void setRazorpayPaymentId(String razorpayPaymentId) {
        this.razorpayPaymentId = razorpayPaymentId;
    }


}
