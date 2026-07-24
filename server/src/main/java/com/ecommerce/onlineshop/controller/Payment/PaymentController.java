package com.ecommerce.onlineshop.controller.Payment;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.onlineshop.exception.OrderException;
import com.ecommerce.onlineshop.model.order.Order;
import com.ecommerce.onlineshop.repository.order.OrderRepository;
import com.ecommerce.onlineshop.response.ApiResponse;
import com.ecommerce.onlineshop.service.order.OrderService;
import com.ecommerce.onlineshop.service.user.UserService;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private OrderRepository orderRepository;

    @Value("${razorpay.api.key}")
    String apikey;

    @Value("${razorpay.api.secretKey}")
    String apiSecret;

    @PostMapping("/payment/{orderId}")

    public ResponseEntity<PaymentLinkResponse> createpayment(@PathVariable String orderId, @RequestHeader("Authorization") String jwt) throws OrderException, RazorpayException {

        Order order = orderService.findOrderByOrderId(orderId);

        try {
            RazorpayClient razorpay = new RazorpayClient(apikey, apiSecret);

            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount", order.getTotalDiscountedPrice() * 100);
            paymentLinkRequest.put("currency", "INR");

            JSONObject customer = new JSONObject();
            customer.put("name", order.getUser().getFirstName());
            customer.put("email", order.getUser().getEmail());
            paymentLinkRequest.put("customer", customer);

            JSONObject notify = new JSONObject();
            notify.put("sms", true);
            notify.put("email", true);
            paymentLinkRequest.put("notify", notify);

            paymentLinkRequest.put("callback_url","https://e-commerce-yr6p-beta.vercel.app/payment/" + orderId);
            paymentLinkRequest.put("callback_method", "get");

            PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);
            String paymentLinkId = payment.get("id");
            String paymentLinkUrl = payment.get("short_url");

            PaymentLinkResponse res = new PaymentLinkResponse();
            res.setPayment_link_id(paymentLinkId);
            res.setPayment_link_url(paymentLinkUrl);

            return new ResponseEntity<PaymentLinkResponse>(res, HttpStatus.CREATED);

        } catch (Exception e) {
            throw new RazorpayException(e.getMessage());
        }
    }

    @GetMapping("/payments")
    public ResponseEntity<ApiResponse> updateOrder(@RequestParam(name = "payment_id") String paymentId, @RequestParam(name = "order_id") String orderId) throws OrderException, RazorpayException {

        Order order = orderService.findOrderByOrderId(orderId);

        System.out.println("PAYMENT ID --------->" + paymentId);
        System.out.println("PAYMENT ID --------->" + orderId);

        RazorpayClient razorpay = new RazorpayClient(apikey, apiSecret);

        try {
            Payment payment = razorpay.payments.fetch(paymentId);

            if (payment.get("status").equals("captured")) {
                order.getPaymentDetails().setPaymentid(paymentId);
                order.getPaymentDetails().setStatus("COMPLETED");
                order.setOrderStatus("PLACED");
                orderRepository.save(order);
            }

            ApiResponse res = new ApiResponse();
            res.setMessage("Your Order has been PLACED");
            res.setStatus(true);

            return new ResponseEntity<ApiResponse>(res, HttpStatus.ACCEPTED);

        } catch (Exception e) {
            throw new RazorpayException(e.getMessage());
        }
    }
}
