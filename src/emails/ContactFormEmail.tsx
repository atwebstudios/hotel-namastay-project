import * as React from "react";

interface ContactFormEmailProps {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  fullName,
  phone,
  email,
  subject,
  message,
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
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
                HOTEL NAMASTAY
              </h1>
              <p
                style={{
                  margin: "6px 0 0 0",
                  color: "#c5ebdb",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Website Contact Message
              </p>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "28px 32px" }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#006951",
                  margin: "0 0 16px 0",
                  borderBottom: "1px solid #ebefeb",
                  paddingBottom: "8px",
                }}
              >
                Message Details
              </h2>
              <table width="100%" border={0} cellPadding={6} cellSpacing={0} style={{ fontSize: "14px" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "30%", color: "#6e7a74" }}>From:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>{fullName}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Phone:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>
                      <a href={`tel:${phone}`} style={{ color: "#006951", textDecoration: "none" }}>
                        {phone}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Email:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>
                      <a href={`mailto:${email}`} style={{ color: "#006951", textDecoration: "none" }}>
                        {email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Subject:</td>
                    <td style={{ fontWeight: "600", color: "#181d1b" }}>{subject}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74", verticalAlign: "top" }}>Message:</td>
                    <td
                      style={{
                        backgroundColor: "#f0f5f1",
                        padding: "12px",
                        borderRadius: "4px",
                        color: "#181d1b",
                        lineHeight: "1.6",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {message}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#6e7a74" }}>Received At:</td>
                    <td style={{ color: "#6e7a74" }}>
                      {new Date(createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td
              style={{
                padding: "16px 32px",
                textAlign: "center",
                backgroundColor: "#ebefeb",
                fontSize: "12px",
                color: "#6e7a74",
              }}
            >
              © {new Date().getFullYear()} Hotel Namastay
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
