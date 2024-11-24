package mamei.de.mdv.system.generator;

import mamei.de.mdv.system.data.IData;
import mamei.de.mdv.system.data.set.IDataSet;

public interface IGenerator {

    public IDataSet loadDataSet(IData data);
}
