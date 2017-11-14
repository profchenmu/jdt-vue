<template>
    <div class='Info'>
        <div class="policyholder-content">
            <div class="show">
            </div>

            <div class="list-block">
                <ul>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">国籍</div>
                                <div class="item-input">
                                    <select name="citizenshipCode">

                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li class="common-occupation">
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">常见职业</div>
                                <div class="item-input">
                                    <select name="industry">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="common-occupation">
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">职业大类</div>
                                <div class="item-input">
                                    <select name="industry">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="common-occupation" >
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">职业中类</div>
                                <div class="item-input">
                                    <select name="jobType">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="common-occupation">
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">职业小类</div>
                                <div class="item-input">
                                    <select  name="jobListCode">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="common-occupation" >
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">详细职业</div>
                                <div class="item-input">
                                    <select  name="occupationCode">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">工作单位</div>
                                <div class="item-input">
                                    <input
                                        type="text"
                                        placeholder="请输入工作单位"
                                        name="company"
                                        maxLength="30"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">通讯地址</div>
                                <div class="item-input">
                                    <select name="province">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label"></div>
                                <div class="item-input">
                                    <select name="city">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label"></div>
                                <div class="item-input">
                                    <select name="cityCode">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">详细地址</div>
                                <div class="item-input">
                                    <input
                                        type="text"
                                        placeholder="请输入详细地址"
                                        maxLength="100"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">邮政编码</div>
                                <div class="item-input">
                                    <input
                                        type="tel"
                                        pattern="\d*"
                                        placeholder="请输入邮政编码"
                                        maxLength="6"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">移动电话</div>
                                <div class="item-input">
                                    <input
                                        type="tel"
                                        placeholder="请输入移动电话"
                                        maxLength="11"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>


                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">固定电话 (可选)</div>
                                <div class="item-input">
                                    <input
                                        type="tel"
                                        name="telephone"
                                        maxLength="18"
                                        placeholder="请输入固定电话" 
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">电子邮箱 (可选)</div>
                                <div class="item-input">
                                    <input
                                        type="email"
                                        class="row-value"
                                        placeholder="用于发送电子保单及回执签收"
                                        maxLength="30"
                                        name="email" 
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">年收入</div>
                                <div class="item-input">
                                    <input
                                        type="number"
                                        pattern="\d*"
                                        placeholder="请输入投保人年收入"
                                        maxLength="8"
                                        name="income" 
                                    />
                                    <span class="item-input-addon">万元</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<<script>
export default {
  name: 'Info'
}
</script>
