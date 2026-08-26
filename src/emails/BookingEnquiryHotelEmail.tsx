import * as React from "react";

interface BookingEnquiryHotelEmailProps {
  enquiryId: string;
  roomName: string;
  rooms: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  adults: number;
  childrenCount: number;
  fullName: string;
  phone: string;
  email: string;
  specialRequest?: string;
  createdAt: string;
}

export const BookingEnquiryHotelEmail: React.FC<BookingEnquiryHotelEmailProps> = ({
  enquiryId,
  roomName,
  rooms,
  checkIn,
  checkOut,
  nights,
  adults,
  childrenCount,
  fullName,
  phone,
  email,
  specialRequest,
  createdAt,
}) => {
  return (
    <div
      style={{
        fontFamily: "'Inter', Arial, sans-serif",
        backgroundColor: "#f6faf6",
        padding: "32px 16px",
        color: "#181d1b",
      }}
    >
      <table
        align="center"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #bdc9c2",
        }}
      >
        {/* Header */}
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: "#006951",
                padding: "24px 32px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  color: "#ffffff",
                  fontSize: "24px",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                }}
              >
                HOTEL O NAMASTE
              </h1>
              <p
                style={{
                  margin: "6px 0 0 0",
                  color: "#c5ebdb",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                New Booking Enquiry Received
              </p>
            </td>
          </tr>

          {/* Enquiry ID Banner */}
          <tr>
            <td
              style={{
                padding: "20px 32px",
                backgroundColor: "#f0f5f1",
                borderBottom: "1px solid #dfe4e0",
              }}
            >
              <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td>
                      <span style={{ fontSize: "12px", color: "#6e7a74", textTransform: "uppercase" }}>
                        Enquiry Reference
                      </span>
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: "700",
                          color: "#006951",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {enquiryId}
                      </div>
                    </td>
                    <td align="right">
                      <span style={{ fontSize: "12px", color: "#6e7a74" }}>
                        Received: {new Date(createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Guest Information */}
          <tr>
            <td style={{ padding: "28px 32px 16px 32px" }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#006951",
                  margin: "0 0 16px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #ebefeb",
                  paddingBottom: "8px",
                }}
              >
                Guest Information
              </h2>
              <table width="100%" border={0} cellPadding={6} cellSpacing={0} style={{ fontSize: "14px" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "35%", color: "#6e7a74" }}>Guest Name:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>{fullName}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Phone Number:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>
                      <a href={`tel:${phone}`} style={{ color: "#006951", textDecoration: "none" }}>
                        {phone}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Email Address:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>
                      <a href={`mailto:${email}`} style={{ color: "#006951", textDecoration: "none" }}>
                        {email}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Stay Details */}
          <tr>
            <td style={{ padding: "16px 32px 24px 32px" }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#006951",
                  margin: "0 0 16px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #ebefeb",
                  paddingBottom: "8px",
                }}
              >
                Stay Details
              </h2>
              <table width="100%" border={0} cellPadding={6} cellSpacing={0} style={{ fontSize: "14px" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "35%", color: "#6e7a74" }}>Room Type:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>
                      {roomName} ({rooms} {rooms === 1 ? "Room" : "Rooms"})
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Check-In:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>{checkIn} (from 12:00 PM)</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Check-Out:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>{checkOut} (by 11:00 AM)</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Duration:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>
                      {nights} {nights === 1 ? "Night" : "Nights"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Guests:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>
                      {adults} {adults === 1 ? "Adult" : "Adults"}
                      {childrenCount > 0 ? `, ${childrenCount} ${childrenCount === 1 ? "Child" : "Children"}` : ""}
                    </td>
                  </tr>
                  {specialRequest && (
                    <tr>
                      <td style={{ color: "#6e7a74", verticalAlign: "top" }}>Special Requests:</td>
                      <td style={{ color: "#181d1b", fontStyle: "italic", backgroundColor: "#f0f5f1", padding: "8px", borderRadius: "4px" }}>
                        {specialRequest}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </td>
          </tr>

          {/* Action Note */}
          <tr>
            <td
              style={{
                padding: "20px 32px",
                backgroundColor: "#ebefeb",
                fontSize: "13px",
                color: "#3e4944",
                lineHeight: "1.5",
              }}
            >
              <strong>Action Required:</strong> Please contact the guest at <strong>{phone}</strong> or <strong>{email}</strong> within 1–2 hours to confirm availability and complete the reservation.
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              style={{
                padding: "20px 32px",
                textAlign: "center",
                fontSize: "12px",
                color: "#6e7a74",
              }}
            >
              © {new Date().getFullYear()} Hotel O Namaste. Automatic booking notification system.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
