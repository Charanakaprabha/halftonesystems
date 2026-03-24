import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import https from 'https';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Stable backend active' });
});

const SYSTEM_INSTRUCTION = `
You are the Halftone AI Assistant (also known as HTS IntelliAssist). Provide CRISP, SHORT, accurate information about Halftone Systems in bullet points if asked. Tone must be professional and helpful.

Here is the entire knowledge base about Halftone Systems:
- **Core Identity**: Halftone Systems is a global technology powerhouse engineering transformative digital solutions that turn ambitious visions into measurable competitive advantages.
- **Founder**: Nagaraj Adireddy (Master's in CS from SRH University Heidelberg, advanced business systems from Univ of Stralsund. 19-year international career).
- **Global Presence**: 19+ Years Expertise, 4 Countries Served, 30+ Tech Partners, 14+ Industry Verticals across 4 continents.
- **Six Pillars of Innovation (Services)**:
  1. Healthcare AI & Smart Ambulance Systems
  2. Sustainable Mobility & EV Fleet Management
  3. Smart Manufacturing & Industry 4.0
  4. Enterprise AI & ERP Transformation
  5. AI Solutions for MSMEs
  6. E-commerce & Digital Platforms
- **Cross-Industry Expertise**: Financial Services, Healthcare & Pharma, Retail & E-commerce, Manufacturing, Energy & Utilities, Logistics, GovTech, Agritech, Education, Drones, Facility Management.
- **Success Stories / Key Clients**:
  - Dick's Sporting Goods (Retail & E-commerce scale)
  - OHM & Bharat Care Ambulance Service (Mobility & Fleet Tech, Healthcare apps)
  - Creighton University (Education/EdTech)
  - Virchow Biotech & Raghava Life Sciences (Healthcare/Pharma/Lab networking)
  - TFMC (Telangana Facility Management Council)
  - Promea, Mithuna Foods, WPP Energy, Royal Orbit Holding Group, PX Nordic, Darian, Chemie-Tech.
- **Careers & Tech Stack**: We hire experts across Cloud/ERP (Oracle HCM, EBS), Platform (ServiceNow), Full-Stack (Node.js, React), Mobile (iOS Swift, Android Kotlin), Infrastructure (DevOps), and Healthcare (Clinical Quality Auditors).
`;

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    console.log('Request received for /api/chat');

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        console.log(`User message: ${message}`);

        const payload = JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: SYSTEM_INSTRUCTION },
                { role: "user", content: message }
            ]
        });

        const options = {
            hostname: 'api.groq.com',
            port: 443,
            path: '/openai/v1/chat/completions',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        console.log('Sending https.request to Groq API...');

        const groqReq = https.request(options, (groqRes) => {
            let data = '';
            groqRes.on('data', (chunk) => { data += chunk; });
            groqRes.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    if (groqRes.statusCode !== 200) {
                        console.error('Groq API Error details:', JSON.stringify(result));
                        return res.status(groqRes.statusCode).json({ error: 'Groq API Error', details: result });
                    }
                    const text = result.choices?.[0]?.message?.content || "No response received.";
                    res.json({ reply: text });
                } catch (e) {
                    res.status(500).json({ error: 'JSON Parse Error', details: data });
                }
            });
        });

        groqReq.on('error', (e) => {
            console.error('HTTPS REQUEST ERROR:', e);
            res.status(500).json({ error: 'Failed to reach Groq', details: e.message });
        });

        groqReq.write(payload);
        groqReq.end();

    } catch (error) {
        console.error('SERVER ERROR:', error);
        res.status(500).json({
            error: 'Server encountered an error',
            details: error.message
        });
    }
});
app.listen(port, () => {
    console.log(`Stable server running at http://localhost:${port}`);
});
