# Circular Economy Tool — City of Boston

**Prepared by:** Paula (Product & UX) | **Meeting:** March 11, 2025
**Purpose:** Validate assumptions and align on scope before development begins

---

## Who We're Building For

**Jordan Reyes — The Eco-Conscious Commuter**

Who is she?
- Boston resident, MBTA commuter, no car.
- College student or young professional.

What is she trying to do?
- Wants to repair or responsibly get rid of items.

What are her barriers?
- Doesn't know where to find services.
- Feels friction & cost uncertainty with traditional service repairs.

What does she do now?
- Relies on Google, Buy Nothing groups, and word of mouth.

Already motivated; just missing the on-ramp.

---

## Problem Statement

> Boston residents who want to repair or donate items can't easily find the services that already exist. Biggest barriers are transportation without a car, lack of specialized vocabulary like "repair cafe," or confidence that small repairs are worth pursuing.

The services exist. The awareness and accessibility don't.

`[ASSUMED — to validate with City: are there documented service deserts by neighborhood?]`

---

## How We'd Measure Success

| Metric | Why It Matters to the City |
| --- | --- |
| Connections made (user → service) | Directly measurable; proves utility |
| Item categories most searched | Reveals unmet demand; informs City programs |
| Geographic distribution of searches | Identifies equity gaps by neighborhood |
| Year-1 partner services listed | Shows ecosystem coverage |

> **Note:** We cannot track whether items are actually repaired — only that a connection was made. Actual diversion data would require partner reporting or follow-up surveys.

`[TO VALIDATE: What reporting cadence works for the City? What data do they already collect?]`

---

## Current Workflow (Without the App)

**What Jordan does today when her toaster breaks:**

1. Tries basic troubleshooting (unplug, replug).
2. Searches "toaster repair Boston" — results skew toward large appliance shops; feels like overkill.
3. Feels uncertain: *Is this worth the money? Will they even take a toaster?*
4. If already eco-conscious: searches "repair cafe", finds Somerville or Cambridge location.
5. If not: gives up and throws the toaster out, feeling vaguely guilty.

**The gap:** Step 4 requires insider vocabulary. Most residents never get there.

---

## Friction Points

- **Discoverability:** Services aren't indexed by item type, only by business category.
- **Cost uncertainty:** No way to assess repair viability before making contact.
- **Emotional barrier:** Small repairs feel frivolous; residents self-screen out.
- **Geographic opacity:** No clear picture of what's accessible by T vs. requires a car.
- **Service freshness:** Events like Fix-It Cafes have irregular schedules not reflected in Google.

---

## Prototype User Flows

### Flow A — Broken Toaster → Repair

1. Jordan opens app and types "toaster" or selects "small appliance."
2. App shows repair services and Fix-It Cafes within MBTA range, sorted by next available date.
3. Each listing shows: item types accepted, cost range, walk-in vs. appointment.
4. Jordan selects Repair Cafe Somerville, sees next event is Saturday.
5. Jordan saves the listing or gets a reminder. `[TO VALIDATE: do users want reminders?]`

### Flow B — Old Shirt → Mending

1. Jordan selects "clothing" or "textiles."
2. App shows mending services, tailors, and clothing swap events nearby.
3. Filter option: "I want to learn to fix it myself" → surfaces skill-share workshops.
4. Jordan finds a mending circle in JP, confirms it's MBTA-accessible.
5. App shows what to bring and what to expect.

---

## Questions to Validate With the City

- What neighborhood-level data exists on repair service coverage vs. demand?
- Can we access the City's circular economy directory programmatically, or is it only available as a PDF?
- Would the City be interested in a database for these services? If so, are there preferences for integrating with City infrastructure in the future?
- What does the City already measure around waste diversion for textiles and electronics?
- Who are the power users (repair cafe organizers, Fix-It Cafe hosts) we should interview first? Do you have contacts to connect us with?

---

## Next Steps

1. **User interviews:** 5–6 sessions with Boston residents + 2–3 service providers (repair cafe organizers, tailors). Goal: validate friction points and flow assumptions.
2. **Service audit:** Map existing repair/mending services by neighborhood against MBTA access to identify deserts.
3. **Prototype:** Low-fidelity flows for toaster and clothing use cases; test with at least 6 potential users.
4. **Partner outreach:** Identify 8–10 anchor services willing to maintain their own listings.
5. **Metrics alignment:** Agree with City on what data would be useful to collect and report on after Year 1.

---

## Running the Prototype Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

**Tech stack:** React + Vite, React Router, plain CSS with Boston design system tokens.
