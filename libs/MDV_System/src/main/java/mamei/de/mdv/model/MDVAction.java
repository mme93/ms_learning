package mamei.de.mdv.model;

import mamei.de.mdv.system.context.ISystemContext;
import mamei.de.mdv.system.module.ESystemCommand;
import mamei.de.mdv.system.module.SystemIdentifier;

public class MDVAction {

    private final SystemIdentifier identifier;
    private final ESystemCommand command;
    private final ISystemContext context;

    public MDVAction(SystemIdentifier identifier, ESystemCommand command, ISystemContext context) {
        this.identifier = identifier;
        this.command = command;
        this.context = context;
    }

    public SystemIdentifier getIdentifier() {
        return identifier;
    }

    public ESystemCommand getCommand() {
        return command;
    }

    public ISystemContext getContext() {
        return context;
    }
}
