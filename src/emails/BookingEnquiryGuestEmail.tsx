import * as React from "react";

interface BookingEnquiryGuestEmailProps {
  enquiryId: string;
  roomName: string;
  rooms: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  adults: number;
  childrenCount: number;
  fullName: string;
  hotelPhone: string;
  hotelEmail: string;
  hotelWhatsApp: string;
}

export const BookingEnquiryGuestEmail: React.FC<BookingEnquiryGuestEmailProps> = ({
  enquiryId,
  roomName,
  rooms,
  checkIn,
  checkOut,
  nights,
  adults,
  childrenCount,
  fullName,
  hotelPhone,
  hotelEmail,
  hotelWhatsApp,
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
                padding: "28px 32px",
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
                HOTEL NAMASTAY
              </h1>
              <p
                style={{
                  margin: "8px 0 0 0",
                  color: "#c5ebdb",
                  fontSize: "14px",
                }}
              >
                Stay Comfortably. Feel at Home.
              </p>
            </td>
          </tr>

          {/* Status Message */}
          <tr>
            <td style={{ padding: "32px 32px 20px 32px" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  backgroundColor: "#c5ebdb",
                  color: "#00513e",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                }}
              >
                Enquiry Received
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#181d1b",
                  margin: "0 0 12px 0",
                }}
              >
                Thank you, {fullName}!
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#3e4944",
                  margin: "0 0 16px 0",
                }}
              >
                We have successfully received your booking enquiry for <strong>Hotel Namastay</strong>.
              </p>
              <div
                style={{
                  backgroundColor: "#f0f5f1",
                  borderLeft: "4px solid #006951",
                  padding: "14px 16px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  color: "#181d1b",
                  lineHeight: "1.5",
                  marginBottom: "20px",
                }}
              >
                <strong>What happens next?</strong>
                <br />
                Our team will contact you within <strong>1–2 hours</strong> via phone or WhatsApp to confirm room availability, provide pricing details, and answer any questions.
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6e7a74",
                  margin: 0,
                }}
              >
                <em>Please note: This email confirms receipt of your enquiry and is not a guaranteed reservation until finalized by our front desk.</em>
              </p>
            </td>
          </tr>

          {/* Stay Summary Card */}
          <tr>
            <td style={{ padding: "0 32px 24px 32px" }}>
              <table
                width="100%"
                border={0}
                cellPadding={10}
                cellSpacing={0}
                style={{
                  backgroundColor: "#f6faf6",
                  borderRadius: "6px",
                  border: "1px solid #dfe4e0",
                  fontSize: "14px",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ color: "#6e7a74", width: "40%" }}>Enquiry Reference:</td>
                    <td style={{ fontWeight: "700", color: "#006951" }}>{enquiryId}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Selected Room:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>
                      {roomName} ({rooms} {rooms === 1 ? "Room" : "Rooms"})
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Check-In Date:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>{checkIn} (12:00 PM onwards)</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Check-Out Date:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>{checkOut} (until 11:00 AM)</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Stay Duration:</td>
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
                </tbody>
              </table>
            </td>
          </tr>

          {/* Need Urgent Assistance */}
          <tr>
            <td
              style={{
                padding: "24px 32px",
                backgroundColor: "#ebefeb",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: "0 0 12px 0",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#181d1b",
                }}
              >
                Need to reach us right away?
              </p>
              <p style={{ margin: 0, fontSize: "14px", color: "#3e4944" }}>
                Phone:{" "}
                <a href={`tel:${hotelPhone}`} style={{ color: "#006951", fontWeight: "600" }}>
                  {hotelPhone}
                </a>{" "}
                | WhatsApp:{" "}
                <a href={`https://wa.me/${hotelWhatsApp.replace(/\D/g, "")}`} style={{ color: "#006951", fontWeight: "600" }}>
                  {hotelWhatsApp}
                </a>{" "}
                | Email:{" "}
                <a href={`mailto:${hotelEmail}`} style={{ color: "#006951", fontWeight: "600" }}>
                  {hotelEmail}
                </a>
              </p>
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
              © {new Date().getFullYear()} Hotel Namastay. Bhiwadi, Rajasthan, India.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
