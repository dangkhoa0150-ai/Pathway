/* ========================================
   CAREER GUIDANCE WEBSITE - JAVASCRIPT
   Navigation, Chatbot AI with OpenAI API
   ======================================== */

// ========== CONFIGURATION ==========
const CONFIG = {
    // OpenAI API Key - REPLACE WITH YOUR ACTUAL KEY
    OPENAI_API_KEY: 'sk-your-actual-api-key-here',
    API_ENDPOINT: 'https://api.openai.com/v1/chat/completions',
    MODEL: 'gpt-3.5-turbo',
    MAX_TOKENS: 500,
};

// ========== DOM ELEMENTS ==========
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotModal = document.getElementById('chatbot-modal');
const closeChatbotBtn = document.getElementById('close-chatbot');
const optionButtons = document.querySelectorAll('.option-btn');
const chatMessages = document.getElementById('chat-messages');

// ========== STATE MANAGEMENT ==========
const appState = {
    currentSection: 'home',
    chatHistory: [],
    userPreferences: {
        interests: [],
        skills: [],
        passions: []
    },
    chatbotActive: false,
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeChatbot();
    initializeScrollAnimations();
    addEventListeners();
    console.log('🚀 Application initialized successfully');
});

// ========== NAVIGATION SYSTEM ==========
function initializeNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                targetSection.classList.add('active');
                appState.currentSection = sectionId;
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Log navigation
                console.log(`📍 Navigated to: ${sectionId}`);
            }
        });
    });
}

// ========== CHATBOT INITIALIZATION ==========
function initializeChatbot() {
    if (chatbotBtn) {
        chatbotBtn.addEventListener('click', function() {
            chatbotModal.classList.add('active');
            appState.chatbotActive = true;
            console.log('💬 Chatbot opened');
            
            // Initialize chatbot if first time
            if (appState.chatHistory.length === 0) {
                addBotMessage('Xin chào! Tôi là trợ lý AI của bạn. Tôi sẽ giúp bạn tìm ngành nghề phù hợp dựa trên sở thích, đam mê và năng lực của bạn.\n\nBạn hãy bắt đầu bằng cách chọn một trong các sở thích dưới đây:');
            }
        });
    }

    if (closeChatbotBtn) {
        closeChatbotBtn.addEventListener('click', function() {
            chatbotModal.classList.remove('active');
            appState.chatbotActive = false;
            console.log('💬 Chatbot closed');
        });
    }

    // Close chatbot when clicking outside
    chatbotModal?.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            appState.chatbotActive = false;
        }
    });
}

// ========== CHATBOT MESSAGE FUNCTIONS ==========
function displayMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'chat-message user-message' : 'chat-message bot-message';
    messageDiv.innerHTML = `<p>${text}</p>`;
    
    if (chatMessages) {
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Add to chat history
    appState.chatHistory.push({
        role: isUser ? 'user' : 'assistant',
        content: text,
        timestamp: new Date().toLocaleTimeString('vi-VN')
    });
}

function addBotMessage(text) {
    displayMessage(text, false);
}

function addUserMessage(text) {
    displayMessage(text, true);
}

function showLoadingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot-message';
    messageDiv.innerHTML = '<div class="loading"></div><div class="loading"></div><div class="loading"></div>';
    chatMessages?.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoadingIndicator() {
    const loadingElement = chatMessages?.querySelector('.loading')?.parentElement;
    if (loadingElement) {
        loadingElement.remove();
    }
}

// ========== CHATBOT INTERACTION ==========
function handleChatbotOption(option) {
    addUserMessage(formatOptionText(option));
    console.log(`💭 User selected: ${option}`);
    
    // Store user preference
    appState.userPreferences.interests.push(option);
    
    // Clear current options and show loading
    const optionsContainer = chatbotModal.querySelector('.options');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
    }
    
    showLoadingIndicator();
    
    // Simulate thinking time and get response from AI
    setTimeout(() => {
        removeLoadingIndicator();
        
        // For now, use predefined responses (can be replaced with actual API calls)
        const responses = {
            'technology': 'Bạn sinh ra để là một chuyên gia công nghệ! 🚀 Các ngành phù hợp: Lập trình viên, Database Admin, AI Engineer, Cloud Architect. Bạn cần: Javascript, Python, Java, Tiếng Anh tốt.\n\nCó muốn khám phá thêm về ngành IT?',
            'humanrights': 'Quá tuyệt vời! Bạn có khiếu về con người 👥 Các ngành phù hợp: HR Manager, Tư vấn hướng dẫn, Giáo viên, Công tác xã hội.\n\nBạn cần: Kỹ năng giao tiếp, tâm lý học, tiếng Anh.\n\nBạn muốn tìm hiểu thêm?',
            'business': 'Tuyệt vời! Bạn có tư duy kinh doanh 💼 Các ngành phù hợp: Kinh tế, Marketing, Sales, Quản lý dự án.\n\nBạn cần: Toán, thống kê, MS Excel, Tiếng Anh, kỹ năng thuyết trình.\n\nChúng tôi có các khóa học phù hợp!',
            'creative': 'Tuyệt vời! Bạn có tâm hồn sáng tạo 🎨 Các ngành phù hợp: Graphic Design, UI/UX, Content Creator, Video Producer.\n\nBạn cần: Design software (Figma, Photoshop), storytelling, tiếng Anh.\n\nMuốn khám phá thêm?'
        };
        
        const response = responses[option] || 'Cảm ơn bạn đã chia sẻ! Hãy chọn thêm sở thích khác để tôi giúp bạn tốt hơn';
        addBotMessage(response);
        
        // Show follow-up options
        showFollowUpOptions();
    }, 1000);
}

function showFollowUpOptions() {
    const optionsContainer = chatbotModal.querySelector('.options');
    if (optionsContainer) {
        optionsContainer.innerHTML = `
            <button class="option-btn" onclick="handleFollowUp('continue')">Tiếp tục tư vấn</button>
            <button class="option-btn" onclick="handleFollowUp('results')">Xem kết quả tư vấn</button>
            <button class="option-btn" onclick="handleFollowUp('schools')">Tìm trường đào tạo</button>
            <button class="option-btn" onclick="handleFollowUp('close')">Kết thúc tư vấn</button>
        `;
    }
}

function handleFollowUp(action) {
    switch(action) {
        case 'continue':
            addUserMessage('Tôi muốn tư vấn thêm');
            showCareersGuide();
            break;
        case 'results':
            addUserMessage('Cho tôi xem kết quả tư vấn');
            showRecommendedCareers();
            break;
        case 'schools':
            addUserMessage('Tôi muốn tìm trường đào tạo');
            showSchoolRecommendations();
            break;
        case 'close':
            addUserMessage('Cảm ơn, tạm biệt');
            closeWithSummary();
            break;
    }
}

function showCareersGuide() {
    setTimeout(() => {
        removeLoadingIndicator();
        addBotMessage(`📊 Dựa trên sở thích của bạn (${appState.userPreferences.interests.join(', ')}), đây là các ngành hot nhất hiện nay:

1. **Công Nghệ Thông Tin** (IT) - Lương: 15-25 triệu/tháng
2. **Kinh Tế & Marketing** - Lương: 12-20 triệu/tháng  
3. **Thiết Kế Đồ Họa** - Lương: 10-18 triệu/tháng
4. **Quản Lý Nguồn Nhân Lực** - Lương: 14-22 triệu/tháng

Bạn muốn tìm hiểu chi tiết về ngành nào?`);
        showFollowUpOptions();
    }, 500);
}

function showRecommendedCareers() {
    setTimeout(() => {
        removeLoadingIndicator();
        addBotMessage(`✨ **KẾT QUẢ TƯ VẤN CỦA BẠN** ✨

🎯 Sở thích: ${appState.userPreferences.interests.join(', ')}

📌 Ngành được đề xuất:
- TOP 1: Công nghệ Thông tin (Match 95%)
- TOP 2: Kinh tế Số (Match 87%)
- TOP 3: Thiết kế UX/UI (Match 82%)

🏆 Kỹ năng cần phát triển:
- Tiếng Anh (Priority cao)
- Kỹ năng giao tiếp
- Tư duy giải quyết vấn đề
- Làm việc nhóm

Hãy bắt đầu lên kế hoạch học tập ngay hôm nay!`);
        showFollowUpOptions();
    }, 500);
}

function showSchoolRecommendations() {
    setTimeout(() => {
        removeLoadingIndicator();
        addBotMessage(`🏫 **TRƯỜNG ĐẠO TẠO HÀNG ĐẦU** 🏫

Dựa trên ngành bạn chọn, đây là các trường top:

1. **Đại học Bách Khoa HN**
   - Ngành: IT, Xây dựng, Điện tử
   - Điểm chuẩn: 28-32
   
2. **FPT University**
   - Ngành: IT, Business, Design
   - Điểm chuẩn: 25-30
   
3. **Đại học Kinh tế Quốc dân**
   - Ngành: Kinh tế, Marketing, Quản lý
   - Điểm chuẩn: 27-31

4. **RMIT Vietnam**
   - Ngành: IT, Business, Design
   - Điểm chuẩn: 26-30

Ghé qua mục "Tin tức" để xem thông tin tuyển sinh chi tiết!`);
        showFollowUpOptions();
    }, 500);
}

function closeWithSummary() {
    setTimeout(() => {
        removeLoadingIndicator();
        addBotMessage(`👋 Cảm ơn bạn đã sử dụng dịch vụ tư vấn của chúng tôi!

📝 **TÓM TẮT PHIÊN LÀM VIỆC:**
- Thời gian: ${new Date().toLocaleTimeString('vi-VN')}
- Sở thích khám phá: ${appState.userPreferences.interests.length} ngành
- Số câu hỏi được trả lời: ${appState.chatHistory.length}

💡 **HÀNH ĐỘNG TIẾP THEO:**
1. Khám phá các ngành được đề xuất
2. Thăm các trường đại học hàng đầu
3. Tham gia các khóa tự học
4. Chuẩn bị cho kỳ thi tuyển sinh

Chúc bạn thành công! 🎯`);
        
        const optionsContainer = chatbotModal.querySelector('.options');
        if (optionsContainer) {
            optionsContainer.innerHTML = `
                <button class="option-btn" onclick="location.reload()">Bắt đầu lại tư vấn</button>
                <button class="option-btn" onclick="chatbotModal.classList.remove('active')">Đóng chatbot</button>
            `;
        }
    }, 500);
}

function formatOptionText(option) {
    const optionTexts = {
        'technology': 'Công Nghệ',
        'humanrights': 'Con Người',
        'business': 'Kinh Doanh',
        'creative': 'Sáng Tạo'
    };
    return `Tôi cảm thấy hứng thú với: ${optionTexts[option] || option}`;
}

// ========== OPENAI API INTEGRATION (Optional - For Advanced Features) ==========
async function callOpenAIAPI(userMessage) {
    try {
        const response = await fetch(CONFIG.API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: CONFIG.MODEL,
                messages: appState.chatHistory.map(msg => ({
                    role: msg.role,
                    content: msg.content
                })),
                max_tokens: CONFIG.MAX_TOKENS,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        const botResponse = data.choices[0].message.content;
        addBotMessage(botResponse);
        console.log('🤖 AI Response received');
        
    } catch (error) {
        console.error('❌ OpenAI API Error:', error);
        addBotMessage('Xin lỗi, tôi gặp sự cố kỹ thuật. Hãy thử lại sau.');
    }
}

// ========== SCROLL ANIMATIONS ==========
function initializeScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all feature cards and news cards
    document.querySelectorAll('.feature-card, .news-card, .team-member').forEach(element => {
        observer.observe(element);
    });
}

// ========== EVENT LISTENERS ==========
function addEventListeners() {
    // Option button event listeners
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const option = this.getAttribute('data-option');
            if (option) {
                handleChatbotOption(option);
            }
        });
    });

    // Hero Chatbot Button
    const chatbotBtnHero = document.getElementById('chatbot-btn-hero');
    if (chatbotBtnHero) {
        chatbotBtnHero.addEventListener('click', function() {
            chatbotModal.classList.add('active');
            appState.chatbotActive = true;
            if (appState.chatHistory.length === 0) {
                addBotMessage('Xin chào! Tôi là trợ lý AI của bạn. Tôi sẽ giúp bạn tìm ngành nghề phù hợp dựa trên sở thích, đam mê và năng lực của bạn.\n\nBạn hãy bắt đầu bằng cách chọn một trong các sở thích dưới đây:');
            }
        });
    }

    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatbotModal.classList.contains('active')) {
            chatbotModal.classList.remove('active');
            appState.chatbotActive = false;
        }
    });

    // Logo click to go home
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            const homeLink = document.querySelector('[data-section="home"]');
            if (homeLink) homeLink.click();
        });
    }
}

// ========== UTILITY FUNCTIONS ==========
function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Could be extended to show visual notifications
}

function formatDate(date) {
    return new Intl.DateTimeFormat('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

function getRandomCareer() {
    const careers = ['Lập trình viên', 'Quản lý dự án', 'Nhà thiết kế', 'Tư vấn hướng dẫn', 'Marketer', 'AI Engineer'];
    return careers[Math.floor(Math.random() * careers.length)];
}

// ========== LOGGING FOR DEBUGGING ==========
function logAppState() {
    console.log('📊 App State:', appState);
    console.log('💬 Chat History:', appState.chatHistory);
}

// Make functions available globally for inline onclick handlers
window.handleChatbotOption = handleChatbotOption;
window.handleFollowUp = handleFollowUp;

// Log app state to console periodically (for debugging)
setInterval(() => {
    if (appState.chatbotActive) {
        console.log(`👤 Active user preferences: ${appState.userPreferences.interests.length} interests selected`);
    }
}, 5000);

console.log('%c🎯 Career Guidance Website Loaded Successfully! 🎯', 'color: #00d9ff; font-size: 14px; font-weight: bold;');
console.log('%cType logAppState() to see current application state', 'color: #b366ff; font-size: 12px;');

const API_KEY = "AIzaSyBfqcIZdjHniWlaw7Q_nIe8PzXCI4RGHcQ"; // Lưu ý bảo mật key này
let chatHistory = [];

// Hàm hiển thị tin nhắn lên màn hình
function appendMessage(role, text) {
    const chatMessages = document.getElementById("chat-messages");
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-message ${role}-message`;
    
    // Sử dụng marked nếu bạn đã import thư viện marked.js để hiển thị đẹp
    const content = (typeof marked !== 'undefined' && role === 'bot') ? marked.parse(text) : `<p>${text}</p>`;
    msgDiv.innerHTML = content;
    
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function callAI(userInput) {
    const statusLabel = document.getElementById("ai-status");
    statusLabel.innerText = "AI đang suy nghĩ...";
    
    appendMessage("user", userInput);
    chatHistory.push({ role: "user", parts: [{ text: userInput }] });

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                contents: chatHistory,
                generationConfig: { temperature: 0.7, maxOutputTokens: 4000 }
            })
        });

        const data = await response.json();
        const botReply = data.candidates[0].content.parts[0].text;

        appendMessage("bot", botReply);
        chatHistory.push({ role: "model", parts: [{ text: botReply }] });

    } catch (error) {
        appendMessage("bot", "Rất tiếc, đã có lỗi xảy ra. Hãy thử lại sau nhé!");
        console.error("Lỗi API:", error);
    } finally {
        statusLabel.innerText = "Gợi ý chủ đề:";
        if (chatHistory.length > 10) chatHistory.splice(0, 2);
    }
}

// Xử lý sự kiện click vào các nút Option có sẵn
document.querySelectorAll(".option-btn").forEach(button => {
    button.addEventListener("click", () => {
        const optionText = button.getAttribute("data-option");
        callAI("Tôi muốn tìm hiểu về ngành: " + optionText);
    });
});

// Xử lý sự kiện gửi tin nhắn từ ô input tự do
document.getElementById("send-free-btn").addEventListener("click", () => {
    const input = document.getElementById("user-free-input");
    if (input.value.trim()) {
        callAI(input.value.trim());
        input.value = "";
    }
});

// Nhấn Enter để gửi
document.getElementById("user-free-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") document.getElementById("send-free-btn").click();
});