import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components"

export default function ContactFormEmail({ name, email, message }) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Heading style={heading}>
              New Contact Form Message
            </Heading>
            <Text style={paragraph}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> {email}
            </Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              <strong>Message:</strong>
            </Text>
            <Text style={paragraph}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const box = {
  padding: "0 48px",
}

const heading = {
  fontSize: "32px",
  fontWeight: "bold",
  marginTop: "32px",
  marginBottom: "24px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "16px",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
} 