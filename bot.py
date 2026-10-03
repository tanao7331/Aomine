import asyncio
import os
import sys
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo, MenuButtonWebApp
from dotenv import load_dotenv

if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN", "YOUR_BOT_TOKEN_HERE")
WEB_APP_URL = os.getenv("WEB_APP_URL", "http://localhost:8085")

dp = Dispatcher()

@dp.message(Command("start", "play"))
async def start_handler(message: types.Message):
    # Inline button with WebAppInfo
    keyboard = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="👁 НАЧАТЬ «ПОСЛЕДНИЙ ВЫПУСК»",
                    web_app=WebAppInfo(url=WEB_APP_URL)
                )
            ]
        ]
    )

    caption = (
        "👁 **ПОСЛЕДНИЙ ВЫПУСК [REMASTERED: ANIME EDITION]**\n"
        "*(Психологическая визуальная новелла в стиле Classroom of the Elite)*\n\n"
        "📖 **Сюжет:**\n"
        "Четверо неразлучных школьных друзей заканчивают 11-й класс. "
        "Они дают мальчишескую клятву держаться вместе, но взрослая жизнь превращается в безжалостный кошмар:\n\n"
        "• **Никита Сидоров** — героиновая зависимость в сырых гаражах, сбыт и 15 лет строгого режима по ст. 228.1 УК РФ\n"
        "• **Аслан Мухамеджанов** — миллионы просмотров в TikTok, лудомания, 50 млн долгов и петля на 62-м этаже в Москва-Сити\n"
        "• **Исмаил Бейсембек** — скандальный политический блог, задержание спецслужбами, 14 дней в СИЗО «Матросская Тишина», 6 лет по ст. 282 и трагедия в ШИЗО\n"
        "• **Ваня Кожин** — предприниматель, создатель «IvanEnergy», потерявший всех друзей. Отчаяние, контракт на СВО, бои под Малой Токмачкой и официальное извещение...\n\n"
        "📱 **Особенности версии:**\n"
        "• Горизонтальный режим 16:9 для смартфонов iOS и Android в Telegram Mini App\n"
        "• 18 глав, 429+ сюжетных сцен, интерактивные мини-игры и развилки\n"
        "• Полный цветной аниме-арт и оригинальный драматический саундтрек\n"
        "• Тактильная отдача Telegram Haptic Feedback на телефоне\n"
        "• Осмотр подлинных судебных дел и извещений МО РФ\n"
        "• 6 слотов сохранения + Автосохранение, история диалогов и пропуск\n\n"
        "Нажмите кнопку ниже, чтобы запустить новеллу в Telegram Mini App:"
    )

    banner_path = os.path.join(os.path.dirname(__file__), "assets", "backgrounds", "title_screen_anime.jpg")
    if os.path.exists(banner_path):
        photo = types.FSInputFile(banner_path)
        await message.answer_photo(photo=photo, caption=caption, reply_markup=keyboard, parse_mode="Markdown")
    else:
        await message.answer(caption, reply_markup=keyboard, parse_mode="Markdown")

async def main():
    if BOT_TOKEN == "YOUR_BOT_TOKEN_HERE" or not BOT_TOKEN:
        print("=" * 68)
        print("  ВНИМАНИЕ: Для запуска Telegram-бота укажите BOT_TOKEN в файле .env")
        print("  Пример .env:")
        print("  BOT_TOKEN=123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ")
        print("  WEB_APP_URL=https://ваш-туннель.trycloudflare.com")
        print("=" * 68)
        return

    bot = Bot(token=BOT_TOKEN)

    # Set bottom chat menu button
    try:
        await bot.set_chat_menu_button(
            menu_button=MenuButtonWebApp(
                text="👁 Играть",
                web_app=WebAppInfo(url=WEB_APP_URL)
            )
        )
    except Exception as e:
        print("Menu button notice:", e)

    print("=" * 68)
    print("  👁 Бот новеллы «Последний Выпуск [REMASTERED]» успешно запущен!")
    print(f"  Mini App URL: {WEB_APP_URL}")
    print("=" * 68)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
