import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Harry Sousa — Software Engineering, AI, Automation e Data";

const TEAL_BRIGHT = "#35D6C4";
const FOREGROUND = "#EAF0F5";
const FOREGROUND_SECONDARY = "#A9BACB";
const FOREGROUND_MUTED = "#7D91A4";
const BORDER = "rgba(255,255,255,0.16)";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: "linear-gradient(160deg, #1a1a2e 0%, #16213e 55%, #101a30 100%)",
          color: FOREGROUND,
          padding: "0 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              backgroundColor: TEAL_BRIGHT,
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: FOREGROUND_MUTED,
              fontFamily: "monospace",
            }}
          >
            {"//"} portfólio
          </span>
        </div>

        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginTop: 28,
          }}
        >
          Harry Sousa
        </div>

        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: FOREGROUND_SECONDARY,
            marginTop: 12,
          }}
        >
          Software Engineering
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: 40,
            color: FOREGROUND_MUTED,
            fontFamily: "monospace",
            fontSize: 22,
          }}
        >
          <span style={{ color: TEAL_BRIGHT }}>●</span>
          <span>AI</span>
          <span style={{ color: TEAL_BRIGHT }}>•</span>
          <span>Automation</span>
          <span style={{ color: TEAL_BRIGHT }}>•</span>
          <span>Data</span>
        </div>

        <div
          style={{
            position: "absolute",
            left: 96,
            right: 96,
            bottom: 64,
            borderTop: `1px solid ${BORDER}`,
          }}
        />
      </div>
    ),
    { ...size },
  );
}