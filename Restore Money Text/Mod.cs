using Colossal.Logging;
using Game;
using Game.Modding;
using Game.SceneFlow;

namespace Restore_Money_Text
{
    public class Mod : IMod
    {
        public static ILog log = LogManager.GetLogger($"{nameof(Restore_Money_Text)}.{nameof(Mod)}").SetShowsErrorsInUI(false);

        public void OnLoad(UpdateSystem updateSystem)
        {
            log.Info(nameof(OnLoad));

            if (GameManager.instance.modManager.TryGetExecutableAsset(this, out var asset))
                log.Info($"Current mod asset at {asset.path}");

        }

        public void OnDispose()
        {
            log.Info(nameof(OnDispose));
        }
    }
}
